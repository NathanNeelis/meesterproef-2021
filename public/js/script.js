console.log('hello world')


async function getData(url) {

    // let username = 'nathan.neelis@hva.nl'
    // let password = ''
    // let headers = new Headers();
    // headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    // const response = await fetch(url, {
    //     method: 'GET',
    //     headers: headers,
    //     //credentials: 'user:passwd'
    // });

    const response = await fetch(url);
    console.log('response', response)
    const data = await response.json();
    console.log('data', data)

    // return data;
}

const endpoint = 'https://test2.hipperacademy.nl/index.php/clients/1096/pam/daily/2017-12-20/2018-1-1';

const CORSendpoint = 'https://cors-anywhere.herokuapp.com/https://test2.hipperacademy.nl/index.php/clients/1096/pam/daily/2017-12-20/2018-1-1';
getData(CORSendpoint)