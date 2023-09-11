const { program } = require('commander');
const greet = require('./commands/greet');
const fetch = require('./commands/fetch');
const read = require('./commands/read');

program
    .version('1.0.0')
    .description('Ninja command-line utility');

program
    .command('greet')
    .description('Display a greeting message')
    .action(greet);

program
    .command('fetch')
    .description('Fetch data from an API')
    .action(fetch);

program
    .command('read <file>')
    .description('Read content from a specified file')
    .action(file => read(file));

program.parse(process.argv);
