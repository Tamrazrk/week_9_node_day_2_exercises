const prompt = require('prompt');

function validateName(name) {
    // Regular expression to match the name criteria
    const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

    return regex.test(name);
}

prompt.start();
prompt.get(['fullName'], (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const isValid = validateName(result.fullName);
    if (isValid) {
        console.log('The name is valid.');
    } else {
        console.log('The name is invalid.');
    }
});
