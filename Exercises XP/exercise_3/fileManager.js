// fileManager.js

const fs = require('fs');

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            return callback(err);
        }
        callback(null, data);
    });
}

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file', err);
            return callback(err);
        }
        callback(null);
    });
}

module.exports = {
    readFile,
    writeFile
};
