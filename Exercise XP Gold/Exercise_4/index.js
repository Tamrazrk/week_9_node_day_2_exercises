const faker = require('faker');
const prompt = require('prompt');

let users = [];

function addUserFromFaker() {
    const user = {
        name: faker.name.findName(),
        addressStreet: faker.address.streetAddress(),
        country: faker.address.country()
    };

    users.push(user);
}

function addUserFromPrompt() {
    prompt.start();

    const properties = [
        {
            name: 'name',
            description: 'Enter your name'
        },
        {
            name: 'addressStreet',
            description: 'Enter your street address'
        },
        {
            name: 'country',
            description: 'Enter your country'
        }
    ];

    prompt.get(properties, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        users.push(result);
        console.log('User added successfully!');
        console.log(users);
    });
}

// addUserFromFaker();
addUserFromPrompt();
