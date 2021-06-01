// TIMER
// Resource: https://codepen.io/cathydutton/pen/GBcvo
const startActivity = document.querySelector(".Btn_start_activity")


// TESTING DATES 

// var date = new Date();
// date.setDate(date.getDate() - 1);

// console.log('testdate', date.toISOString().slice(0, 10))

// let startDate = "2021-05-31";
// let date1 = new Date();
// let date2 = new Date(startDate).toISOString().slice(0, 10);
// let date3 = date1.toISOString().slice(0, 10);

// let date4 = new Date()
// date4.setDate(date4.getDate() - 1);

// if (date4.toISOString().slice(0, 10) == date2) {
//     console.log('true', date4.toISOString().slice(0, 10), date2)
// } else {
//     console.log('false')
// }



if (startActivity) {
    // Elements
    const appendmiliSeconds = document.querySelector(".miliSeconds")
    const appendSeconds = document.querySelector(".seconds")
    const appendMinutes = document.querySelector(".minutes")
    const appendHours = document.querySelector(".hours")

    const buttonStart = document.querySelector('.Btn_start_activity');
    const buttonResume = document.querySelector('.Btn_resume_activity');
    const buttonStop = document.querySelector('.Btn_end_activity');
    const buttonReset = document.querySelector('.Btn_reset_activity');

    const inputFormStartDate = document.getElementById('startDate_activity');
    const inputFormStartTime = document.getElementById('startTime_activity');
    const inputFormDuration = document.getElementById('duration_activity');
    const inputFormEndDate = document.getElementById('endDate_activity');
    const inputFormEndTime = document.getElementById('endTime_activity');
    const buttonSave = document.querySelector('.Btn_save_activity');

    // format timer
    let hours = 00;
    let minutes = 00;
    let seconds = 00;
    let miliSeconds = 00;
    let Interval;
    let activityDuration;



    // if hours onder the 10 add a zero
    if (totalHours.toString().length == 1) {
        currentTotalHours = "0" + totalHours;
    } else {
        currentTotalHours = now.getHours()
    }




    // TO DO
    // Hide resume button
    // Hide start button and show resume button on start
    // Hide stop until started
    // Hide save until there is actual data preset
    // make timer pretty

    // Take a very good look at the date object and how I save it in the database. DONE
    // Not quite there yet. DONE

    // create overview page  for redirect
    // redirect overview page

    // update overview/home page with activites that day/week?


    // start
    buttonStart.onclick = function () {
        // current time
        const now = new Date()
        let currentTotalMinutes;
        let currentTotalHours;
        let totalMinutes = now.getMinutes();
        let totalHours = now.getHours();

        // if minutes onder the 10 add a zero
        if (totalMinutes.toString().length == 1) {
            currentTotalMinutes = "0" + totalMinutes;
        } else {
            currentTotalMinutes = now.getMinutes()
        }

        let startDate = now.toISOString().slice(0, 10);
        let startTime = currentTotalHours + ":" + currentTotalMinutes

        // save start date to form
        inputFormStartDate.value = startDate;
        inputFormStartTime.value = startTime;

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    // resume
    buttonResume.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }


    // stop 
    buttonStop.onclick = function () {
        clearInterval(Interval);

        // total duration in seconds
        activityDuration = seconds + (minutes * 60) + ((hours * 60) * 60);

        inputFormDuration.value = activityDuration // total duration activity in seconds
    }

    // reset
    buttonReset.onclick = function () {
        clearInterval(Interval);
        miliSeconds = "00";
        seconds = "00";
        minutes = "00";
        hours = "00"

        // all values to 00
        appendmiliSeconds.innerHTML = miliSeconds;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;

        // remove minutes and hours from timer
        appendMinutes.classList.remove('show');
        appendHours.classList.remove('show');

        // form values to empty
        inputFormStartDate.value = ''; // start date
        inputFormDuration.value = ''; // duration
        inputFormEndDate.value = '';

    }

    // save
    buttonSave.onclick = function (event) {
        event.preventDefault();

        // current time
        const now = new Date()
        let currentTotalMinutes;
        let currentTotalHours;
        let totalMinutes = now.getMinutes();
        let totalHours = now.getHours();

        // if minutes onder the 10 add a zero
        if (totalMinutes.toString().length == 1) {
            currentTotalMinutes = "0" + totalMinutes;
        } else {
            currentTotalMinutes = now.getMinutes()
        }

        let endDate = now.toISOString().slice(0, 10);
        let endTime = currentTotalHours + ":" + currentTotalMinutes

        // add end date
        inputFormEndDate.value = endDate;
        inputFormEndTime.value = endTime;

        // submit form
        document.querySelector('.a-form').submit();
    }


    // stopwatch function
    function startTimer() {

        // mili seconds
        miliSeconds++;

        if (miliSeconds <= 9) {
            appendmiliSeconds.innerHTML = "0" + miliSeconds; // adds a 0 before a single digit
        }

        if (miliSeconds > 9) {
            appendmiliSeconds.innerHTML = miliSeconds;

        }

        // seconds
        if (miliSeconds > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            miliSeconds = 0;
            appendmiliSeconds.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds; // adds a 0 before a single digit
        }

        // minutes
        if (seconds > 59) {
            appendMinutes.classList.add('show');
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendMinutes.innerHTML = minutes; // adds a 0 before a single digit
        }

        // hours
        if (minutes > 59) {
            appendHours.classList.add('show');
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendHours.innerHTML = hours; // adds a 0 before a single digit
        }

    }


}