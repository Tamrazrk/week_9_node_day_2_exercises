// script.js

const prompt = require('prompt');
const minutesLived = require('./date');

prompt.start();
prompt.get(['birthdate'], (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const minutes = minutesLived(result.birthdate);
    console.log(`A person born on ${result.birthdate} has lived approximately ${minutes} minutes.`);
});
