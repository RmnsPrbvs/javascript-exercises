const convertToCelsius = function(num) {
  num = (num - 32) * 5/9
  return Number(num.toFixed(1))
};

const convertToFahrenheit = function(num) {
  num = (num * (9/5)) + 32
  return Number(num.toFixed(1))
};

console.log(convertToCelsius(32))
console.log(convertToCelsius(-100))
console.log(convertToFahrenheit(73.2))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


