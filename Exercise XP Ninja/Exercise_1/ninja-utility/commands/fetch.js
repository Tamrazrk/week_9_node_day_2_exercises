const axios = require('axios');

async function fetch() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(response.data.value);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

module.exports = fetch;
