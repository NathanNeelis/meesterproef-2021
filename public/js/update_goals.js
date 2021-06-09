let dailyPercentage = document.querySelector('.dailyValue')
let chart = document.querySelector('.dailygoal')
let weeklyPercentage = document.querySelector('.weeklyValue')
let weeklyChart = document.querySelector('.weeklygoal')

if (dailyPercentage) {
    chart.style.setProperty('--daily_percent', dailyPercentage.innerHTML)
}

if (weeklyPercentage) {
    weeklyChart.style.setProperty('--weekly_percent', weeklyPercentage.innerHTML)
}





// Register css properties
CSS.registerProperty({
    name: '--pos',
    syntax: '<length-percentage>',
    initialValue: '0%',
    inherits: true
});

CSS.registerProperty({
    name: '--c0',
    syntax: '<color>',
    initialValue: '#ff6f00',
    inherits: true
});

CSS.registerProperty({
    name: '--c1',
    syntax: '<color>',
    initialValue: '#f5f5f5',
    inherits: true
});