const display = document.querySelector(".display");
display.innerHTML = "&nbsp;"
var currNum = "";
var firstOp;
var secondOp;
var operator;

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
    var result; 
    switch (operation) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    clearDisplay();
    updateDisplay(result);
}

function updateDisplay(buttonContent) {
    currNum += buttonContent;
    display.textContent = currNum;
}

function clearDisplay() {
    currNum = "";
    display.textContent = currNum;
    display.innerHTML = "&nbsp;"
}

function calculate() {
    secondOp = currNum;
    operate(operator, firstOp, secondOp);
}

function saveFirstOp(op) {
    operator = op;
    firstOp = currNum;
    currNum = "";
}

document.querySelectorAll(".number").
    forEach(button => {
        button.addEventListener("click", () => updateDisplay(button.textContent));
    })
document.querySelectorAll(".operator").
    forEach(button => {
        button.addEventListener("click", () => saveFirstOp(button.textContent));
    })

document.querySelector(".clear").addEventListener("click", () => clearDisplay());
document.querySelector(".equal").addEventListener("click", () => calculate());




