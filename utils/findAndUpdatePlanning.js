function findAndUpdatePlanning(data, date, newPlanning) {
    let newActivityArr = [];
    data.planned_activities.forEach(result => {
        if (result.date !== date) {
            newActivityArr.push(result)
        }
    })

    newActivityArr.push(newPlanning);
    return newActivityArr;

}

module.exports = findAndUpdatePlanning;