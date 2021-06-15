const User = require('../models/user');
const getDates = require('../utils/dataNextWeek')
const getRawDates = require('../utils/getRawDates')
const filterPlanActivities = require('../utils/filterPlanActivities')

// export
async function activities(req, res) {
    const comingWeek = getDates()
    const rawDates = getRawDates()

    // step 1: get all user data
    const data = await User.findOne({
        email: req.session.user.user.email
    });

    // step 2 filter activities for each day
    const activityArrayDay1 = filterPlanActivities(data, rawDates[0]);
    const activityArrayDay2 = filterPlanActivities(data, rawDates[1]);
    const activityArrayDay3 = filterPlanActivities(data, rawDates[2]);
    const activityArrayDay4 = filterPlanActivities(data, rawDates[3]);
    const activityArrayDay5 = filterPlanActivities(data, rawDates[4]);
    const activityArrayDay6 = filterPlanActivities(data, rawDates[5]);
    const activityArrayDay7 = filterPlanActivities(data, rawDates[6]);

    renderPage()

    function renderPage() {
        if (req.session.user) {
            res.render("activities.ejs", {
                user: req.session.user.user,
                dates: comingWeek,
                rawDates: rawDates,
                planDayOne: activityArrayDay1,
                planDayTwo: activityArrayDay2,
                planDayThree: activityArrayDay3,
                planDayFour: activityArrayDay4,
                planDayFive: activityArrayDay5,
                planDaySix: activityArrayDay6,
                planDaySeven: activityArrayDay7,
            });
        } else {
            res.render("activities.ejs");
        }
    }
}


module.exports = activities;