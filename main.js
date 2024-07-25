// remember that 10 digits is the maximum screenspace, including decimal places

// basic calculator operations
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

// variables
const operators = ["+", "-", "/", "*"];
let firstNumber = null;
let operator = "";
let secondNumber = null;
let displayValue = "0";

// DOM
const displayText = document.getElementById("display-text");

// operate function
const operate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return +divide(firstNumber, secondNumber).toFixed(8);
  }
};

const updateDisplayValue = (input) => {
  if (input === "+/-") {
    if (displayValue.includes("-")) {
      displayValue = displayValue.slice(1);
    } else {
      displayValue = `-${displayValue}`;
    }
  } else if (input === "%") {
    displayValue = `${+displayValue / 100}`;
  } else if (input === "." && displayValue.length < 8) {
    if (!displayValue.includes(".")) {
      displayValue = `${displayValue}${input}`;
    }
  } else if (displayValue === "0") {
    displayValue = input;
  } else {
    if (displayValue.length < 9) {
      displayValue = `${displayValue}${input}`;
    }
  }
  if (displayValue.length > 10) {
    resetCalculator();
    displayText.textContent = "too long";
  } else {
    displayText.textContent = displayValue;
    if (operator === "") {
      firstNumber = +displayValue;
    } else {
      secondNumber = +displayValue;
    }
  }
};

const storeDisplayValue = () => {
  const convertedDisplayValue = +displayValue;
  firstNumber = convertedDisplayValue;
  displayValue = "0";
};

const resetCalculator = () => {
  firstNumber = null;
  operator = "";
  secondNumber = null;
  displayValue = "0";
  displayText.textContent = displayValue;
};

const handleButtonInput = (buttonText) => {
  if (buttonText === "AC") {
    return resetCalculator();
  } else if (operators.includes(buttonText)) {
    if (operator === "" || secondNumber === null) {
      operator = buttonText;
      displayValue = "0";
    } else {
      const result = operate(firstNumber, secondNumber, operator);
      firstNumber = result;
      operator = "";
      secondNumber = null;
      displayValue = `${result}`;
      if (displayValue.length > 10) {
        resetCalculator();
        displayText.textContent = "too long";
      } else {
        displayText.textContent = displayValue;
        displayValue = "0";
      }
    }
  } else if (buttonText === "=") {
    if (firstNumber !== null && secondNumber !== null && operator !== "") {
      const result = operate(firstNumber, secondNumber, operator);
      firstNumber = result;
      operator = "";
      secondNumber = null;
      displayValue = `${result}`;
      if (displayValue.length > 10) {
        resetCalculator();
        displayText.textContent = "too long";
      } else {
        displayText.textContent = displayValue;
        displayValue = "0";
      }
    } else if (firstNumber !== null) {
      const savedFirstNumnber = firstNumber;
      resetCalculator();
      updateDisplayValue(`${savedFirstNumnber}`);
    } else {
      resetCalculator();
    }
  } else {
    updateDisplayValue(buttonText);
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonInput(button.textContent);
  });
});
