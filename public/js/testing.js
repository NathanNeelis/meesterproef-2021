// TESTING DATES 

let date = new Date(),
    date1 = new Date(),
    date2 = new Date(),
    date3 = new Date(),
    date4 = new Date(),
    date5 = new Date(),
    date6 = new Date();
// date.setDate(date.getDate() - 1);

// console.log('testdate', date.toISOString().slice(0, 10))

// let startDate = "2021-05-31";
// let date1 = new Date();
// let date2 = new Date(startDate).toISOString().slice(0, 10);
// let date3 = date1.toISOString().slice(0, 10);

// let date4 = new Date()
// date4.setDate(date4.getDate() - 1);

date1.setDate(date1.getDate() - 1);
date2.setDate(date2.getDate() - 2);
date3.setDate(date3.getDate() - 3);
date4.setDate(date4.getDate() - 4);
date5.setDate(date5.getDate() - 5);
date6.setDate(date6.getDate() - 6);

const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december'
];

let day1 = days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()]
let day2 = days[date1.getDay()] + ' ' + date1.getDate() + ' ' + months[date1.getMonth()]
let day3 = days[date2.getDay()] + ' ' + date2.getDate() + ' ' + months[date2.getMonth()]
let day4 = days[date3.getDay()] + ' ' + date3.getDate() + ' ' + months[date3.getMonth()]
let day5 = days[date4.getDay()] + ' ' + date4.getDate() + ' ' + months[date4.getMonth()]
let day6 = days[date5.getDay()] + ' ' + date5.getDate() + ' ' + months[date5.getMonth()]
let day7 = days[date6.getDay()] + ' ' + date6.getDate() + ' ' + months[date6.getMonth()]

let dayTest = date3.toISOString().slice(0, 10)

let datesWeek = [];
datesWeek.push(day1, day2, day3, day4, day5, day6, day7)
// console.log('a week', datesWeek)

if (date4.toISOString().slice(0, 10) == date2) {
    // console.log('true', date4.toISOString().slice(0, 10), date2)

} else {
    // console.log('false')
}


// Testing data in conic gradient -> daily goal

// let dailyPercentage = document.querySelector('.dailyValue')
// let chart = document.querySelector('.dailygoal')

// if (dailyPercentage) {
//     console.log(dailyPercentage.innerHTML)
//     chart.style.setProperty('--daily_percent', dailyPercentage.innerHTML)
// }

// chart.addEventListener('click', e => {
//     let dailyPercentage = Math.floor(Math.random() * 100) + 1;
//     chart.style.setProperty('--daily_percent', dailyPercentage + "%")
// })