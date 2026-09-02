//console.log(Document)
//console.log(document.body)
//window.console.log("tanya")
//console.log(window)

// THERE are mainly 4 things jisse hum dom ke html nodes ko select kr sakte h 


// first way using className
// const heading = document.getElementsByClassName("heading")
// console.log("class name")
// console.log(heading)


// // second way

// const subheading = document.getElementById("SUBHEADING")
// console.log(subheading)
//console.dir(subheading)



// third way

// document.querySelector("li")
//document.querySelectorAll("li")


// innerHTML, innerText , textContent

//document.querySelector("one")
//const newatri = document.querySelector("a")


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
