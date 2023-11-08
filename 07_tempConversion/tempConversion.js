const convertToFahrenheit = function(celsius) {
  return fahrenheit = Math.round((celsius*(9/5) + 32)*10)/10;
};

const convertToCelsius = function(fahrenheit) {
  return celsius = Math.round(((fahrenheit-32)*(5/9))*10)/10;
};

//var rounded = Math.round(number * 10) / 10
// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
