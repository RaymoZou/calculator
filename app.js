const display = document.querySelector(".display");
var displayValue = "";

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

function operate(operation, a, b) { return operation(a, b); }

function updateDisplay(buttonContent) {
    displayValue += buttonContent;
    display.textContent = displayValue;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => updateDisplay(button.textContent));
})