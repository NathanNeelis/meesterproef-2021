const fetch = require('node-fetch');

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`an error occurred: ${error}`)
        throw error
    }

}

module.exports = getData;