function refactorStartTime(time) {
    let startRefactoredTime;
    let splitTime = time.split(':')

    if (splitTime[1] >= 14) {
        let hours = splitTime[0];
        let minutes = splitTime[1] - 14;
        startRefactoredTime = hours + ':' + minutes;
    } else {
        let hours = splitTime[0];
        let minutes = splitTime[1] - splitTime[1];
        startRefactoredTime = hours + ':' + minutes;
    }

    return startRefactoredTime
}

module.exports = refactorStartTime