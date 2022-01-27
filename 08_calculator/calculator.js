const add = function (numA, numB) {
  return numA + numB;

};

const subtract = function (numA, numB) {
  return numA - numB;
};

const sum = function (array) {
  let result = 0;
  if (array.length != 0) {
    for (let element of array) {
      result += element;
    }
  }
  return result;
};

const multiply = function (array) {
  let result = 0;
  if (array.length > 1) {
    result = 1;
    for (let element of array) {
      result *= element;
    }
  }
  return result;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (numA) {
  let result = 1;
  for (let i=1; i<=numA;i++){
    result *=i;
  }
  return result;
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
