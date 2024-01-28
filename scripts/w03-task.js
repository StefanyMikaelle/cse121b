/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
let addNumber1 = parseFloat(document.getElementById('add1').value);
let addNumber2 = parseFloat(document.getElementById('add2').value);
document.getElementById('sum').value = add(addNumber1, addNumber2).toFixed(2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
let subtractNumber1 = parseFloat(document.getElementById('subtract1').value);
let subtractNumber2 = parseFloat(document.getElementById('subtract2').value);
document.getElementById('difference').value = subtract(subtractNumber1, subtractNumber2).toFixed(2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2){
    return number1 * number2;
}

function multiplyNumbers(){
let factorNumber1 = parseFloat(document.getElementById('factor1').value);
let factorNumber2 = parseFloat(document.getElementById('factor2').value);
document.getElementById('product').value = multiply(factorNumber1, factorNumber2).toFixed(2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}

function divideNumbers(){
let dividendNumber = parseFloat(document.getElementById('dividend').value);
let divisorNumber = parseFloat(document.getElementById('divisor').value);
document.getElementById('quotient').value = divide(dividendNumber, divisorNumber).toFixed(2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal(){
let subtotalNumber = parseFloat(document.getElementById('subtotal').value);
if(subtotalNumber>0){
    if(document.getElementById('member').checked){
        subtotalNumber = subtotalNumber * 0.8;
    }
}
document.getElementById('total').textContent = `$ ${subtotalNumber.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1 );

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0 );


/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map( number => number * 2);


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map( number => number * 2).reduce((sum, number) => sum + number);


