let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function setOperator(operator) {
    displayValue += ' ' + operator + ' ';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
