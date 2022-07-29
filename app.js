const display = document.querySelector(".display");
display.innerHTML = "&nbsp;"
var currNum = "";
var firstNum = null;
var secondNum = null;
var prevResult = null;
var currOperator = null;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    switch (operation) {
        case "+":
            prevResult = add(a, b);
            break;
        case "-":
            prevResult = subtract(a, b);
            break;
        case "*":
            prevResult = multiply(a, b);
            break;
        case "/":
            prevResult = divide(a, b);
            break;
    }
    clearDisplay();
}

function addToDisplay(buttonContent) {
    currNum += buttonContent;
    display.textContent = currNum;
}

/// soft reset
function clearDisplay() {
    firstNum = prevResult;
    secondNum = null;
    currOperator = null;
    addToDisplay(prevResult);
    currNum = "";
}

// hard reset
function reset() {
    firstNum = null;
    secondNum = null;
    currOperator = null;
    prevResult = null;
    currNum = "";
    display.innerHTML = "&nbsp";
}

function calculate() {
    operate(currOperator, firstNum, secondNum);
}

function onOperatorClick(op) {
    saveNumbers();
    if (currOperator == null && firstNum != null && firstNum != "") currOperator = op;
    if (firstNum && secondNum && currOperator) calculate();
}

function saveNumbers() {
    if (firstNum == null || firstNum == "") {
        firstNum = currNum;
        currNum = "";
    } else if (secondNum == null || secondNum == "") {
        secondNum = currNum;
        currNum = "";
    }
}

document.querySelectorAll(".number").
    forEach(button => {
        button.addEventListener("click", () => addToDisplay(button.textContent));
    })
document.querySelectorAll(".operator").
    forEach(button => {
        button.addEventListener("click", () => onOperatorClick(button.textContent));
    })

document.querySelector(".clear").addEventListener("click", () => reset());
document.querySelector(".equal").addEventListener("click", (e) => {
    saveNumbers();
    calculate();
});


