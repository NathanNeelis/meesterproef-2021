console.log('hello world')


async function getData(url) {

    // let username = 'nathan.neelis@hva.nl'
    // let password = ''
    // let headers = new Headers();
    // headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    // const response = await fetch(url, {
    //     method: 'GET',
    //     // headers: headers,
    //     // credentials: 'include'
    //     credentials: "same-origin"
    //     //credentials: 'user:passwd'
    // });

    const response = await fetch(url);
    const data = await response.json();
    console.log('this is data', data)
    return data;
}



// daily PAM values
const dailyPAMURL = 'https://gist.githubusercontent.com/NathanNeelis/f83a294032223066bdddbd5ff37c9dc7/raw/4853849d9da46786b557a131937759bb16218dbc/pam_today'

// EPOCH VALUES - PAM each 15 minutes
const epochURL = 'https://gist.githubusercontent.com/NathanNeelis/9a449e389ab30351369c8556ce634b1b/raw/38da52499b41c51af294845d8576c18a85964aff/epoch_values'


// const endpoint = 'https://test2.hipperacademy.nl/index.php/clients/1096/pam/daily/2017-12-20/2018-1-1';
// const CORSendpoint = 'https://cors-anywhere.herokuapp.com/https://test2.hipperacademy.nl/index.php/clients/1096/pam/daily/2017-12-20/2018-1-1';
console.log('this is data', getData(dailyPAMURL));