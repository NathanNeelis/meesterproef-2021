function defaultAvarage(data) {
    // new array with object only containing the pam value
    let arrayPam = data.map((data, index) => {
        return {
            pam: parseInt(data.values[0].pam, 10), // string to integer
        }
    });

    // getting the avarage pam score
    // Resource: https://stackoverflow.com/questions/52513123/how-to-get-the-average-from-array-of-objects
    let arrayTotal = 0;
    let length = arrayPam.length;
    arrayPam.forEach(({
        pam
    }) => arrayTotal += pam);

    const avarage = Math.round(arrayTotal / length) + 1;
    // console.log('avarage pam score dataset', avarage)

    return avarage

}

module.exports = defaultAvarage;