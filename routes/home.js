// Imports 
const getData = require('../utils/getData');


// export
async function home(req, res) {

    // const endpoint = 'https://test2.hipperacademy.nl/index.php/clients/'
    const clientID = '1096' // open to change
    const pam = '/pam'
    const daily = '/daily'
    const raw = '/raw'
    const dateStart = '/2017-12-20'
    const dateEnd = '/2018-1-1'

    const endpoint = 'https://cors-anywhere.herokuapp.com/https://test2.hipperacademy.nl/index.php/clients/1096/pam/daily/2017-12-20/2018-1-1';


    const dailyURL = 'https://test2.hipperacademy.nl/index.php/clients/1096/pam/daily/2017-12-20/2018-1-1'

    // const rawData = await getData(endpoint + clientID + pam + raw + dateStart + dateEnd); // FETCH THE RAW DATA
    // const dailyData = await getData(endpoint + clientID + pam + daily + dateStart + dateEnd); // FETCH THE DAILY DATA
    // const data = await getData(endpoint)

    // console.log('rawData', rawData);
    // console.log('dailyData', dailyData);
    // console.log('data', data);

    res.render("home.ejs", {
        // rawData: rawData,
        // dailyData: dailyData
    });

}


module.exports = home;