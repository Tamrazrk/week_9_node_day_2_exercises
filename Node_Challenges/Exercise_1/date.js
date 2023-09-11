// date.js

function timeUntilNewYear() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1); // January 1st of next year

    const diffInMilliseconds = newYear - now;
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

    return `the 1st January is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
}

module.exports = timeUntilNewYear;
