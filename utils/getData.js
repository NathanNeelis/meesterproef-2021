const fetch = require('node-fetch');

async function getData(url) {

    // let username = 'nathan.neelis@hva.nl'
    // let password = ''
    // let headers = new Headers();
    // headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));


    const response = await fetch(url);

    // const response = await fetch(url, {
    //     method: 'GET',
    //     headers: headers,
    //     //credentials: 'user:passwd'
    // });
    // console.log(response)
    const data = await response.json();

    return data;
}

module.exports = getData;