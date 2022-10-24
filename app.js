let displayText = document.querySelector(".displayText");
let secondValue = document.querySelector(".secondValue");
let operator = "";
const symbol = document.querySelector(".symbol");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const zeroButton = document.querySelector(".zero");
const clearButton = document.querySelector(".clear");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const equalButton = document.querySelector(".equal");

oneButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "1";
  } else {
    displayText.textContent += "1";
  }
});
twoButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "2";
  } else {
    displayText.textContent += "2";
  }
});
threeButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "3";
  } else {
    displayText.textContent += "3";
  }
});
fourButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "4";
  } else {
    displayText.textContent += "4";
  }
});
fiveButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "5";
  } else {
    displayText.textContent += "5";
  }
});
sixButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "6";
  } else {
    displayText.textContent += "6";
  }
});
sevenButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "7";
  } else {
    displayText.textContent += "7";
  }
});
eightButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "8";
  } else {
    displayText.textContent += "8";
  }
});
nineButton.addEventListener("click", () => {
  if (displayText.textContent === "0") {
    displayText.textContent = "";
    displayText.textContent += "9";
  } else {
    displayText.textContent += "9";
  }
});
zeroButton.addEventListener("click", () => (displayText.textContent += "0"));

clearButton.addEventListener("click", () => {
  displayText.textContent = "0";
  secondValue.textContent = "";
  symbol.textContent = "";
});

plusButton.addEventListener("click", () => {
  operator = "plus";
  secondValue.textContent = displayText.textContent;
  displayText.textContent = "0";
  symbol.textContent = "+";
});

minusButton.addEventListener("click", () => {
  operator = "minus";
  secondValue.textContent = displayText.textContent;
  displayText.textContent = "0";
  symbol.textContent = "-";
});

divideButton.addEventListener("click", () => {
  operator = "divide";
  secondValue.textContent = displayText.textContent;
  displayText.textContent = "0";
  symbol.textContent = "/";
});

multiplyButton.addEventListener("click", () => {
  operator = "multiply";
  secondValue.textContent = displayText.textContent;
  displayText.textContent = "0";
  symbol.textContent = "*";
});

function eval(selection) {
  if (selection === "plus") {
    displayText.textContent =
      parseInt(secondValue.textContent) + parseInt(displayText.textContent);
    secondValue.textContent = "";
  } else if (selection === "minus") {
    displayText.textContent =
      parseInt(secondValue.textContent) - parseInt(displayText.textContent);
    secondValue.textContent = "";
  } else if (selection === "divide") {
    displayText.textContent =
      parseInt(secondValue.textContent) / parseInt(displayText.textContent);
    secondValue.textContent = "";
  } else if (selection === "multiply") {
    displayText.textContent =
      parseInt(secondValue.textContent) * parseInt(displayText.textContent);
    secondValue.textContent = "";
  }
  symbol.textContent = "";
}

equalButton.addEventListener("click", () => eval(operator));
