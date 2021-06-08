function filterPlanActivities(dataToFilter, targetDate) {
    let newArr = [];


    if (dataToFilter.planned_activities) {
        if (dataToFilter.planned_activities.length > 1) {
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