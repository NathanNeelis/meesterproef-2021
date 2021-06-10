function filteredActivities(dataToFilter) {
    const now = new Date()
    const date = now.toISOString().slice(0, 10);

    let newArr = []

    // filter over all activites and if the activity has the same date as today
    // push the activity to a new array
    dataToFilter.activities.forEach((result) => {
        if (result.date == date) {
            newArr.push(result)
        }
    });
    return newArr.reverse();
}

module.exports = filteredActivities;