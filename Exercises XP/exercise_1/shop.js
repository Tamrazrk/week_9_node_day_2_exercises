// shop.js

const products = require('./products.js');

function findProductByName(productName) {
    return products.find(product => product.name === productName);
}

const laptopDetails = findProductByName('Laptop');
console.log(laptopDetails);

const shirtDetails = findProductByName('Shirt');
console.log(shirtDetails);

