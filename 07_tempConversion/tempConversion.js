const convertToCelsius = function(degrees) {
  let calc = (degrees - 32) * (5/ 9);
  return Math.round(calc * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  const  calc1 = (degrees * (9 /5) + 32);
  return Math.round(calc1 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
