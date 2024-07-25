// basic calculator operations
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

// variables
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

// operate function
const operate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);
    case "subtract":
      return subtract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
  }
};

// log tests
console.log(add(12, 15));
console.log(subtract(40, 15));
console.log(multiply(7, 4));
console.log(divide(100, 10));
