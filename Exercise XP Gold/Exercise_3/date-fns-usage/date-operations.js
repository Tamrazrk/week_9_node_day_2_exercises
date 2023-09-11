// date-operations.js

const { format, addDays } = require('date-fns');

function displayDateOperations() {
    const currentDate = new Date();
    const dateAfterAddingDays = addDays(currentDate, 5);
    const formattedDate = format(dateAfterAddingDays, 'PPPpp');

    console.log(`Current date and time: ${format(currentDate, 'PPPpp')}`);
    console.log(`Date and time after adding 5 days: ${formattedDate}`);
}

module.exports = displayDateOperations;
