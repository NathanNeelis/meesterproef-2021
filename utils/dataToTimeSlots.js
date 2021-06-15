  function dataToTimeSlots(rawDataArray) {

      // STEP 3: create array of time each 15 minutes
      // resource: https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript
      const x = 15; //minutes interval
      let times = []; // time array
      let tt = 0; // start time

      //loop to increment the time and push results in array
      for (var i = 0; tt < 24 * 60; i++) {
          var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
          var mm = (tt % 60); // getting minutes of the hour in 0-55 format
          times[i] = ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array 
          tt = tt + x;
      }


      // STEP 4: create object from 2 arrays (time + rawdata)
      // resource https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays
      let rawDataObject = {};
      times.forEach((time, i) => rawDataObject[time] = parseInt(rawDataArray[i], 10));

      return rawDataObject
  }
  module.exports = dataToTimeSlots;