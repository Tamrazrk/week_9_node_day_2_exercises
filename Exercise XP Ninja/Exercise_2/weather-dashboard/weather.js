const axios = require('axios');
const chalk = require('chalk');

const API_KEY = 'YOUR_API_KEY';

async function getWeather(city) {
    try {
        const response = await axios.get(`https://wttr.in/${city}?format=j1`);
        const data = response.data;

        // Extracting temperature and weather description
        const temp = data.current_condition[0].temp_C;
        const description = data.current_condition[0].weatherDesc[0].value;

        console.log(chalk.green(`Weather in ${city}:`));
        console.log(chalk.blue(`Temperature: ${temp}°C`));
        console.log(chalk.cyan(`Description: ${description}`));
    } catch (error) {
        console.error(chalk.red('Error fetching weather data:', error.message));
    }
}

module.exports = getWeather;
