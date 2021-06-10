function getWeeklyPamScore(data) {
    let weekdata;
    let pamArr = [];


    // if there is more then 7 days of data, slice the array and get the last 7 days
    if (data.length > 7) {
        weekdata = data.slice(Math.max(data.length - 7, 0))
    } else {
        weekdata = data;
    }

    // loop over each day and push its pam value with decimals in a new array
    weekdata.forEach(result => {
        pamArr.push(parseFloat(result.values[0].pam))
        return pamArr
    })

    // add all pam values into one value
    let score = pamArr.reduce((a, b) => a + b)
    return score
}

module.exports = getWeeklyPamScore;