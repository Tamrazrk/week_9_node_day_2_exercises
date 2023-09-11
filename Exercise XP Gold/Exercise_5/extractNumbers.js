function returnNumbers(str) {
    // Use a regular expression to match all numbers in the string
    const numbers = str.match(/\d+/g);

    // If numbers were found, concatenate them together; otherwise, return an empty string
    return numbers ? numbers.join('') : '';
}

// Test the function
console.log(returnNumbers('k5k3q2g5z6x9bn'));  // Expected output: 532569
