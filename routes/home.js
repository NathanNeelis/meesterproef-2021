// Imports 
const getData = require('../utils/getData');


// export
async function home(req, res) {

    // daily PAM values
    const dailyPAMURL = 'https://gist.githubusercontent.com/NathanNeelis/f83a294032223066bdddbd5ff37c9dc7/raw/4853849d9da46786b557a131937759bb16218dbc/pam_today'

    // EPOCH VALUES - PAM each 15 minutes
    const epochURL = 'https://gist.githubusercontent.com/NathanNeelis/9a449e389ab30351369c8556ce634b1b/raw/38da52499b41c51af294845d8576c18a85964aff/epoch_values'

    const weeklyData = await getData(dailyPAMURL) // 2 weekly data split in days
    const rawDailyData = await getData(epochURL) // data every 15 minutes

    const currentDay = weeklyData[14] // This should be automated for the current day.
    const currentWeek = getCurrentWeek(weeklyData)

    renderPage(weeklyData, rawDailyData, currentDay)

    function renderPage(weeklyData, rawDailyData, currentDay) {
        // console.log("this is weekly data", weeklyData);
        // console.log("this is raw daily data", rawDailyData);
        // console.log(currentDay)
        res.render("home.ejs", {
            weeklyData: weeklyData,
            rawDailyData: rawDailyData,
            currentDay: currentDay
        });
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

    const avarage = Math.round(arrayTotal / length);
    console.log('avarage pam score dataset', avarage)

    return avarage

}