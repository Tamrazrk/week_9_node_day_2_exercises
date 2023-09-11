// copy-file.js

const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file', err);
        return;
    }

    fs.writeFile('destination.txt', data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the destination file', err);
            return;
        }
        console.log('File copy successful.');
    });
});
