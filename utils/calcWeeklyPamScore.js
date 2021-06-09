function getWeeklyPamScore(data) {
    let weekdata;
    let pamArr = [];

    if (data.length > 7) {
        weekdata = data.slice(Math.max(data.length - 7, 0))
    } else {
        weekdata = data;
    }

    weekdata.forEach(result => {
        pamArr.push(parseFloat(result.values[0].pam))
        return pamArr
    })

    let score = pamArr.reduce((a, b) => a + b)
    return score
}

module.exports = getWeeklyPamScore;