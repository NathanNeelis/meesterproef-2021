function findActivity(feedback, data) {
    let feedbackArray = feedback.match(/.{1,10}/g);
    const date = feedbackArray[0]
    const time = feedbackArray[1]

    let newArr = []
    data.activities.forEach((result) => {
        if (result.activity.startDate_activity == date && result.activity.startTime_activity == time) {
            newArr.push(result)
        }
    });
    return newArr.reverse();
}

module.exports = findActivity;