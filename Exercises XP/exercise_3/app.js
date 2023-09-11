// app.js

const { readFile, writeFile } = require('./fileManager.js');

readFile('Hello World.txt', (err, content) => {
    if (err) {
        return;
    }

    console.log('Content of "Hello World.txt":', content);

    writeFile('Bye World.txt', 'Writing to the file', (err) => {
        if (err) {
            return;
        }
        console.log('Successfully wrote to "Bye World.txt"');
    });
});
