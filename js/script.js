//Button variables
const btnNumber = document.querySelectorAll("#number");
const btnOperator = document.querySelectorAll("#operator");
const btnClear = document.querySelector(".btnClear");
const btnEqual = document.querySelector(".btnEqual");
const btnDot = document.querySelector(".btnDot");

//Global variables
let display = document.querySelector(".display");
let smallDisplay = document.querySelector(".smallDisplay")
let firstNumber;
let operator;
let secondNumber;


//Event listener
btnNumber.forEach((button => 
    button.addEventListener("click", () => appendText(button.textContent)))
);

btnOperator.forEach((button =>
    button.addEventListener("click", () => setOperator(button.textContent)))
);

btnEqual.addEventListener("click", () => {
    equal();
})

btnClear.addEventListener("click", () => {
    clear();
})

btnDot.addEventListener("click", () => {
    if(display.textContent.includes(".")){
        alert("You can only use one . per number")
    }else{
        appendText(".")
    }
})

//functions

function appendText(text) {
    display.textContent += text;
    smallDisplay.textContent += text;
}

function setOperator(text) {
    operator = text;
    firstNumber = parseFloat(display.textContent);
    display.textContent = "";
    smallDisplay.textContent += text;
}

function equal() {
    secondNumber = parseFloat(display.textContent);
    if(isNaN(firstNumber) == true || isNaN(secondNumber) == true){
        alert("Please enter TWO numbers and a operator before pressing equal!");
        clear();
    } else {
        smallDisplay.textContent += "="
        operate(firstNumber, secondNumber, operator);
    }
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "";
    smallDisplay.textContent = "";
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (x, y, operator) {
    if (operator == "+") {
        let result = add(x, y)
        result = Math.round((result + Number.EPSILON) * 100) / 100
        display.textContent = result;
        smallDisplay.textContent += result
        firstNumber = result;
    } else if (operator == "-") {
        let result = subtract(x, y)
        result = Math.round((result + Number.EPSILON) * 100) / 100
        display.textContent = result;
        smallDisplay.textContent += result
        firstNumber = result;
    } else if (operator == "*") {
        let result = multiply(x, y)
        result = Math.round((result + Number.EPSILON) * 100) / 100
        display.textContent = result;
        smallDisplay.textContent += result
        firstNumber = result;
    } else {
        let result = divide(x, y)
        if(y == 0) {
            alert("You can't divide by 0")
            clear();
        } else {
            result = Math.round((result + Number.EPSILON) * 100) / 100
            display.textContent = result;
            smallDisplay.textContent += result
            firstNumber = result;
        }
    }
}