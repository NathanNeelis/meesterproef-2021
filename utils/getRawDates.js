function getRawDates() {
    let rawDataWeek = [];
    let date = new Date(),
        date1 = new Date(),
        date2 = new Date(),
        date3 = new Date(),
        date4 = new Date(),
        date5 = new Date(),
        date6 = new Date();

    date1.setDate(date1.getDate() + 1);
    date2.setDate(date2.getDate() + 2);
    date3.setDate(date3.getDate() + 3);
    date4.setDate(date4.getDate() + 4);
    date5.setDate(date5.getDate() + 5);
    date6.setDate(date6.getDate() + 6);

    let day1 = date.toISOString().slice(0, 10),
        day2 = date1.toISOString().slice(0, 10),
        day3 = date2.toISOString().slice(0, 10),
        day4 = date3.toISOString().slice(0, 10),
        day5 = date4.toISOString().slice(0, 10),
        day6 = date5.toISOString().slice(0, 10),
        day7 = date6.toISOString().slice(0, 10);

    rawDataWeek.push(day1, day2, day3, day4, day5, day6, day7)

    return rawDataWeek;
}

module.exports = getRawDates;