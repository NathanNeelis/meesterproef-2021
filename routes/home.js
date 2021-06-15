// Utils
const getData = require('../utils/getData');
const filterActivities = require('../utils/filterActivities')
const calcDefaultGoal = require('../utils/calcDefaultGoal')
const getWeeklyPamScore = require('../utils/calcWeeklyPamScore')
const dataToTimeSlots = require('../utils/dataToTimeSlots')
const sum = require('../utils/sum')
const refactorStartTime = require('../utils/refactorStartTime')

const User = require('../models/user');


// export
async function home(req, res) {

    // STEP 1: Fetch all data
    // daily PAM values
    const dailyPAMURL = 'https://gist.githubusercontent.com/NathanNeelis/f83a294032223066bdddbd5ff37c9dc7/raw/4853849d9da46786b557a131937759bb16218dbc/pam_today'

    // EPOCH VALUES - PAM each 15 minutes
    // const epochURL = 'https://gist.githubusercontent.com/NathanNeelis/9a449e389ab30351369c8556ce634b1b/raw/38da52499b41c51af294845d8576c18a85964aff/epoch_values'
    // const rawDailyData = await getData(epochURL) // data every 15 minutes
    // const defaultRawData = rawDailyData[14].scores

    const weeklyData = await getData(dailyPAMURL) // 2 weekly data split in days
    const currentDay = weeklyData[14] // This should be automated for the current day.
    const currentWeek = calcDefaultGoal(weeklyData) // At the moment the PAM average of all the data plus 1
    const defaultRawData = "010101010101010201010101010101010101010101010101010101010101010101010101010101010101010203010401010101010202030503010101010202030102010103040102010102030401020302010402010101010515000000000000"
    const rawDataArray = defaultRawData.match(/.{1,2}/g);

    let activitiesToday; // Zero state

    // STEP 2: find today's activities 
    const data = await User.findOne({
        email: req.session.user.user.email
    });


    // STEP 2.2 Check if there are activities in the data. 
    // IF SO
    // Filter activities on todays activties  -UTIL
    if (data.activities) {
        activitiesToday = filterActivities(data);

        // STEP 3: create array of time each 15 minutes - IN UTIL
        // STEP 4: create object from 2 arrays (time + rawdata) - IN UTIL
        const rawDataObject = dataToTimeSlots(rawDataArray)


        // STEP 5: calculate pam score
        // resource: https://masteringjs.io/tutorials/fundamentals/filter-object

        // STEP 5.1: Find the latest activity
        const latestActivity = activitiesToday[0] // Yes this is [0] because I reversed the array

        // STEP 5.2: Save the rawdataObject as an array
        const rawDataAsArray = Object.entries(rawDataObject);


        if (latestActivity) {
            // This function makes sure you get the points of the current timeframe as well
            // by removing up to 14 minutes
            const refactoredStartTime = refactorStartTime(latestActivity.activity.startTime_activity)

            // STEP 5.3: filter the array -> If bigger then start time and smaller then end time of activity.
            const inTimeFrame = rawDataAsArray.filter(([key, value]) => (key >= refactoredStartTime && key <= latestActivity.activity.endTime_activity));

            // STEP 5.4: Reverd result back as an object
            const rawPamScore = Object.fromEntries(inTimeFrame);

            // STEP 5.5 Calculate total pamscore
            // AT THE MOMENT: adds all raw values in timeframe, which is the total minutes.
            // TODO: This should be a calculation of the PAM score based on the total minutes 
            // MISSING: Formula minutes to PAM score
            let totalPamScoreActivity = sum(rawPamScore);


            // STEP 6: Update pamScore in the activity in the database
            // ATTENTION: CLEAR SITE DATA ON TESTING
            User.updateOne({
                email: req.session.user.user.email,
                "activities.activity.startDate_activity": latestActivity.activity.startDate_activity,
                "activities.activity.startTime_activity": latestActivity.activity.startTime_activity
            }, {
                $set: {
                    "activities.$.activity.pamScore": totalPamScoreActivity,
                }
            }, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }

    // SIDE STEP: Calculating percentage of goal
    // daily goal
    let dailyGoal;
    dailyGoal = calcDefaultGoal(weeklyData) // with the static data this is 7 at the moment -> avarage pam + 1
    // dailyGoal = // get the daily goal from user input 

    let pamScore;
    pamScore = weeklyData[14].values[0].pam; // with the static data this is 6.62

    let dailyGoalInPercentage;
    dailyGoalInPercentage = Math.floor((pamScore / dailyGoal * 100));

    // weekly goal
    let weeklyPamScore;
    weeklyPamScore = getWeeklyPamScore(weeklyData) // function in utils. Counts the total pamscore of the last 7 days.

    let weeklyGoal;
    weeklyGoal = dailyGoal * 7;

    let weeklyGoalInPercentage;
    weeklyGoalInPercentage = Math.floor((weeklyPamScore / weeklyGoal * 100));


    // END SIDESTEP

    renderPage()

    function renderPage() {

        if (req.session.user) {
            const user = req.session.user.user

            res.render("home.ejs", {
                weeklyData: weeklyData,
                currentDay: currentDay,
                currentWeek: currentWeek,
                user: user,
                activitiesToday: activitiesToday,
                dailyPercentage: dailyGoalInPercentage,
                weeklyPercentage: weeklyGoalInPercentage
            });
        } else {

            res.render("home.ejs", {
                weeklyData: weeklyData,
                currentDay: currentDay,
                currentWeek: currentWeek
            });
        }

    }

}


module.exports = home;