// Utils
const getData = require('../utils/getData');
const filterActivities = require('../utils/filterActivities')

const User = require('../models/user');


// export
async function home(req, res) {

    // STEP 1: Fetch all data
    // daily PAM values
    const dailyPAMURL = 'https://gist.githubusercontent.com/NathanNeelis/f83a294032223066bdddbd5ff37c9dc7/raw/4853849d9da46786b557a131937759bb16218dbc/pam_today'

    // EPOCH VALUES - PAM each 15 minutes
    const epochURL = 'https://gist.githubusercontent.com/NathanNeelis/9a449e389ab30351369c8556ce634b1b/raw/38da52499b41c51af294845d8576c18a85964aff/epoch_values'

    const weeklyData = await getData(dailyPAMURL) // 2 weekly data split in days
    const rawDailyData = await getData(epochURL) // data every 15 minutes

    const currentDay = weeklyData[14] // This should be automated for the current day.
    const currentWeek = getCurrentWeek(weeklyData) // At the moment the PAM average of all the data plus 1


    const defaultRawData = rawDailyData[14].scores
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

        // STEP 3: create array of time each 15 minutes
        // resource: https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript
        const x = 15; //minutes interval
        let times = []; // time array
        let tt = 0; // start time

        //loop to increment the time and push results in array
        for (var i = 0; tt < 24 * 60; i++) {
            var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
            var mm = (tt % 60); // getting minutes of the hour in 0-55 format
            times[i] = ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array 
            tt = tt + x;
        }


        // STEP 4: create object from 2 arrays (time + rawdata)
        // resource https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
        let rawDataObject = {};
        times.forEach((time, i) => rawDataObject[time] = parseInt(rawDataArray[i], 10));


        // STEP 5: calculate pam score
        // resource: https://masteringjs.io/tutorials/fundamentals/filter-object

        // STEP 5.1: Find the latest activity
        const latestActivity = activitiesToday[0] // Yes this is [0] because I reversed the array

        // STEP 5.2: Save the rawdataObjec as an array
        const asArray = Object.entries(rawDataObject);

        // STEP 5.3: filter the array -> If bigger then start time and smaller then end time of activity.
        if (latestActivity) {
            const inTimeFrame = asArray.filter(([key, value]) => (key >= latestActivity.activity.startTime_activity && key <= latestActivity.activity.endTime_activity));

            // STEP 5.4: Reverd result back as an object
            const rawPamScore = Object.fromEntries(inTimeFrame);

            // STEP 5.5 Calculate total pamscore
            // resource: https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
            function sum(obj) {
                var sum = 0;
                for (var el in obj) {
                    if (obj.hasOwnProperty(el)) {
                        sum += parseFloat(obj[el]);
                    }
                }
                return sum;
            }

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

    renderPage()

    function renderPage() {

        if (req.session.user) {
            const user = req.session.user.user

            res.render("home.ejs", {
                weeklyData: weeklyData,
                rawDailyData: rawDailyData,
                currentDay: currentDay,
                currentWeek: currentWeek,
                user: user,
                activitiesToday: activitiesToday
            });
        } else {

            res.render("home.ejs", {
                weeklyData: weeklyData,
                rawDailyData: rawDailyData,
                currentDay: currentDay,
                currentWeek: currentWeek
            });
        }

    }

}


module.exports = home;



function getCurrentDay(data) {
    console.log(data.length, data[14].values[0].pam)
}


function getCurrentWeek(data) {
    // new array with object only containing the pam value
    let arrayPam = data.map((data, index) => {
        return {
            pam: parseInt(data.values[0].pam, 10), // string to integer
        }
    });

    // getting the avarage pam score
    // Resource: https://stackoverflow.com/questions/52513123/how-to-get-the-average-from-array-of-objects
    let arrayTotal = 0;
    let length = arrayPam.length;
    arrayPam.forEach(({
        pam
    }) => arrayTotal += pam);

    const avarage = Math.round(arrayTotal / length) + 1;
    // console.log('avarage pam score dataset', avarage)

    return avarage

}