// date.js

function minutesLived(birthdate) {
    const birthDateObj = new Date(birthdate);
    const now = new Date();

    const diffInMilliseconds = now - birthDateObj;
    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));

    return minutes;
}

module.exports = minutesLived;
