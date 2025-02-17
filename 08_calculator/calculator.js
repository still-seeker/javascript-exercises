const add = function(num1, num2) {
	  const sum =  num1 + num2;
    return sum;
};

const subtract = function(num1, num2) {
  const minus = num1 - num2;
  return minus;	
};

const sum = function(array) {
  	return array.reduce((total, curr) => total + curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let fact;
	if (num > 1) {
    fact = num * factorial(num - 1);
  }
  else 
    fact = 1;

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
