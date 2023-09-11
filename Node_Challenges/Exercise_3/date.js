const Holidays = require('date-holidays');

function timeUntilNextHoliday() {
    const now = new Date();
    const hd = new Holidays('US'); // You can change the country code as needed
    
    const holidaysThisYear = hd.getHolidays(now.getFullYear()).filter(h => new Date(h.date) > now);
    
    // Get the next holiday, if none are left this year, get the first holiday of next year
    const nextHoliday = holidaysThisYear.length > 0 ? holidaysThisYear[0] : hd.getHolidays(now.getFullYear() + 1)[0];

    const holidayDate = new Date(nextHoliday.date);
    const diffInMilliseconds = holidayDate - now;
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

    return `Today's date is ${now.toDateString()} and the next holiday (${nextHoliday.name}) is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}

module.exports = timeUntilNextHoliday;
