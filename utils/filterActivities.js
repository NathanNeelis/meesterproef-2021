function filteredActivities(dataToFilter) {
    const now = new Date()
    const date = now.toISOString().slice(0, 10);

    let newArr = []
    dataToFilter.activities.forEach((result) => {
        if (result.date == date) {
            newArr.push(result)
        }
    });
    return newArr.reverse();
}

module.exports = filteredActivities;