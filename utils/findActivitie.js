function findActivity(feedback, data) {
    // feedback array = reqested parameters object
    let feedbackArray = feedback.match(/.{1,10}/g);
    const date = feedbackArray[0]
    const time = feedbackArray[1]

    let newArr = []

    // loop over all activities
    // if the start date of the activity is the same as the date from the feedback array and 
    // if the start time of the activity is the same as the time from the feedback array
    // then push the activities in a new array and reverse the array
    data.activities.forEach((result) => {
        if (result.activity.startDate_activity == date && result.activity.startTime_activity == time) {
            newArr.push(result)
        }
    });
    return newArr.reverse();
}

module.exports = findActivity;