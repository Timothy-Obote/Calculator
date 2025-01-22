let currentInput = '';
let lastInput = '';
let operator = '';

// Function to update the display with a new value
function updateDisplay(value) {
    const display = document.querySelector('.display'); // Replace with your actual display element
    if (display) {
        display.textContent = value;
    }
}

// Function to append a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to append an operator
function appendOperator(op) {
    if (currentInput === '') return; // Prevent adding an operator without a number
    if (lastInput !== '') calculateResult(); // Calculate if there's already a pending operation
    operator = op;
    lastInput = currentInput;
    currentInput = '';
}

// Function to calculate the result
function calculateResult() {
    if (!operator || currentInput === '' || lastInput === '') return;

    const num1 = parseFloat(lastInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        case '*':
            currentInput = (num1 * num2).toString();
            break;
        case '/':
            currentInput = num2 === 0 ? 'Error' : (num1 / num2).toString();
            break;
    }

    operator = '';
    lastInput = '';
    updateDisplay(currentInput);
}

// Function to clear the display and reset inputs
function clearDisplay() {
    currentInput = '';
    lastInput = '';
    operator = '';
    updateDisplay('0');
}

// Function to handle backspace
function backspace() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay(currentInput);
}

// Event listeners for buttons (optional setup example)
document.querySelectorAll('.number').forEach(button =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

document.querySelectorAll('.operator').forEach(button =>
    button.addEventListener('click', () => appendOperator(button.textContent))
);

document.querySelector('.equals').addEventListener('click', calculateResult);
document.querySelector('.clear').addEventListener('click', clearDisplay);
document.querySelector('.backspace').addEventListener('click', backspace);
