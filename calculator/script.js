let currentValue = '';  
let resetDisplay = false;  
let lastAnswer = ''; 

let display = document.querySelector('.calculator input[type="text"]');

function updateDisplay() {
    display.value = currentValue || '0';
}

function appendNumber(number) {
    if (resetDisplay) {
        currentValue = number;
        resetDisplay = false;
    } else {
        if (currentValue === '0' && number !== '.') {
            currentValue = number;
        } else {
            currentValue += number;
        }
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (resetDisplay) {
        resetDisplay = false;
    }

    if (currentValue && !['+', '-', '*', '/', '%'].includes(currentValue.slice(-1))) {
        currentValue += operator;
    }

    updateDisplay();
}

function appendParenthesis(parenthesis) {
    currentValue += parenthesis;
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    resetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function togglePlusMinus() {
    if (currentValue) {
        currentValue = currentValue.startsWith('-') ? currentValue.slice(1) : '-' + currentValue;
        updateDisplay();
    }
}

function squareRoot() {
    if (currentValue) {
        currentValue = Math.sqrt(parseFloat(currentValue)).toString();
        updateDisplay();
    }
}

function recallAnswer() {
    if (lastAnswer) {
        currentValue += lastAnswer;
        updateDisplay();
    }
}

function calculate() {
    try {
        lastAnswer = eval(currentValue).toString();  
        currentValue = lastAnswer;
    } catch {
        currentValue = 'Error';
    }
    resetDisplay = true;  
    updateDisplay();
}
