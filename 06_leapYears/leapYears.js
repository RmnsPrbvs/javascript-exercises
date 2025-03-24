const leapYears = function(year) {
    if (Number.isInteger(year / 4) && (!(Number.isInteger(year / 100)) || (Number.isInteger(year / 400)))) {
        return true
    } 
    return false
};

console.log(leapYears(2000))

// Do not edit below this line
module.exports = leapYears;
