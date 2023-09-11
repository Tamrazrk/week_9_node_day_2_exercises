// app.js

const _ = require('lodash');
const math = require('./math.js');

const numbers = [2, 4, 6, 8];

console.log("Sum of numbers:", _.sum(numbers));
console.log("Addition:", math.add(5, 7));
console.log("Multiplication:", math.multiply(5, 7));
