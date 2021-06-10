function getDates() {
    const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
        'juli', 'augustus', 'september', 'oktober', 'november', 'december'
    ];
    let datesWeek = [];

    // set variables with each a new date object for the coming 7 days
    let date = new Date(),
        date1 = new Date(),
        date2 = new Date(),
        date3 = new Date(),
        date4 = new Date(),
        date5 = new Date(),
        date6 = new Date();


    // save each variable with a specific day
    date1.setDate(date1.getDate() + 1);
    date2.setDate(date2.getDate() + 2);
    date3.setDate(date3.getDate() + 3);
    date4.setDate(date4.getDate() + 4);
    date5.setDate(date5.getDate() + 5);
    date6.setDate(date6.getDate() + 6);

    // save the date in a new variable => example date: Donderdag 10 juni
    let day1 = days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()],
        day2 = days[date1.getDay()] + ' ' + date1.getDate() + ' ' + months[date1.getMonth()],
        day3 = days[date2.getDay()] + ' ' + date2.getDate() + ' ' + months[date2.getMonth()],
        day4 = days[date3.getDay()] + ' ' + date3.getDate() + ' ' + months[date3.getMonth()],
        day5 = days[date4.getDay()] + ' ' + date4.getDate() + ' ' + months[date4.getMonth()],
        day6 = days[date5.getDay()] + ' ' + date5.getDate() + ' ' + months[date5.getMonth()],
        day7 = days[date6.getDay()] + ' ' + date6.getDate() + ' ' + months[date6.getMonth()];

    datesWeek.push(day1, day2, day3, day4, day5, day6, day7)

    return datesWeek;
}

module.exports = getDates;