function findAndUpdatePlanning(data, date, newPlanning) {
    let newActivityArr = [];

    // find all planned activities
    // loop over each activitie
    // if the date is not the same as user input date
    // then push all activities into the array
    data.planned_activities.forEach(result => {
        if (result.date !== date) {
            newActivityArr.push(result)
        }
    })

    // after that, add the new planning in to the existing array
    // so it updated that specific day instead of adding it
    newActivityArr.push(newPlanning);
    return newActivityArr;

}

module.exports = findAndUpdatePlanning;