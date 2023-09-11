// file-info.js

const path = require('path');
const fs = require('fs');

function displayFileInfo() {
    const filePath = path.join(__dirname, 'data', 'example.txt');

    const fileExists = fs.existsSync(filePath);
    if (!fileExists) {
        console.error("File doesn't exist.");
        return;
    }

    const fileStats = fs.statSync(filePath);
    console.log(`File exists: ${fileExists}`);
    console.log(`File size: ${fileStats.size} bytes`);
    console.log(`File creation time: ${fileStats.birthtime}`);
}

module.exports = displayFileInfo;
