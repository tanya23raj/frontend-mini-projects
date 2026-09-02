const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const result = document.querySelector('.result');

function getValues() {
    return {
        a: parseFloat(num1.value) || 0,
        b: parseFloat(num2.value) || 0
    };
}

document.querySelector('.add').addEventListener('click', () => {
    const { a, b } = getValues();
    result.textContent = a + b;
});

document.querySelector('.subtract').addEventListener('click', () => {
    const { a, b } = getValues();
    result.textContent = a - b;
});

document.querySelector('.multiply').addEventListener('click', () => {
    const { a, b } = getValues();
    result.textContent = a * b;
});

document.querySelector('.divide').addEventListener('click', () => {
    const { a, b } = getValues();
    if (b === 0) {
        result.textContent = 'Error: Division by zero';
    } else {
        result.textContent = a / b;
    }
});
