// app.js

import persons from './data.js';

function calculateAverageAge(personsArray) {
    const totalAge = personsArray.reduce((acc, person) => acc + person.age, 0);
    return totalAge / personsArray.length;
}

const averageAge = calculateAverageAge(persons);
console.log(`The average age of all persons is: ${averageAge}`);
