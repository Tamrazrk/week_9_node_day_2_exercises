const fs = require('fs');

function read(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err.message);
            return;
        }
        console.log(data);
    });
}

module.exports = read;
