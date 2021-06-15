function filterPlanActivities(dataToFilter, targetDate) {
    let newArr = [];

    // filter over all planned activities
    // if there are planned activities
    if (dataToFilter.planned_activities) {
        // if the array is atleast 1 or longer
        if (dataToFilter.planned_activities.length >= 1) {
            // then loop over each of activity and puch them into a new array
            // if the activity has the same date as the targeted date
            // creates an array with 1 object containing the activities for the targeted date.
            dataToFilter.planned_activities.forEach(result => {
                if (result.date == targetDate) {
                    newArr.push(result)
                }
            })
        } else if (dataToFilter.planned_activities) {
            if (dataToFilter.planned_activities.date == targetDate) {
                newArr.push(dataToFilter.planned_activities)
            }
        }
    }

    return newArr;
}

module.exports = filterPlanActivities;