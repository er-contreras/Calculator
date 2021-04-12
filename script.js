'use strict';


// Calculator letters
// let letters = document.querySelector('#letters').innerHTML;
// let nHTML = '';

// // htmlContent = source.innerText;
// // htmlContent.split('');
  
// for(let i = 0; i < letters.length; i++) {
//   nHTML += "<span class = 'x'" + letters[i] + "</span>";
// };

// document.querySelector('#letters').innerHTML = nHTML;

// Changing color letters from the string "Calculator"
let letters = document.querySelector('#letters').textContent;
let nHTML = '';

for(let i of letters) {
  nHTML += "<span class = 'x'>" + i + "</span>"; 
};

document.querySelector('#letters').innerHTML = nHTML;

// Operation Functions
const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const divide = function(num1, num2) {
  return num1 / num2;
};

// Our Buttons
const outPut = document.getElementById('output');
const num = document.getElementsByClassName('number');

const addBtn = document.querySelector('.addOperator');
const subtractBtn = document.querySelector('.subtractOperator');
const multiplyBtn = document.querySelector('.multiplyOperator');
const divideBtn = document.querySelector('.divideOperator');

const allClear = document.querySelector('.ac');

const equals = document.querySelector('.equals');


let plusFirsValue = 0;
let secondValue = 0;
let subFirstValue = 0;
let multFirstValue = 0;
let divFirstValue = 0;

for(let i = 0; i < num.length; i++) {
  num[i].addEventListener('click', function() { 
    outPut.innerText += num[i].innerText;
    console.log(outPut.innerText);
  });
};

addBtn.addEventListener('click', function() {
  plusFirsValue = Number(outPut.innerText);
  outPut.innerText = '';
  console.log(plusFirsValue);
});
  
subtractBtn.addEventListener('click', function() {
  subFirstValue = Number(outPut.innerText);
  outPut.innerText = '';
  console.log(plusFirsValue);
});

multiplyBtn.addEventListener('click', function() {
  multFirstValue = Number(outPut.innerText);
    outPut.innerText = '';
});

divideBtn.addEventListener('click', function() {
  divFirstValue = Number(outPut.innerText);
    outPut.innerText = '';
});

equals.addEventListener('click', function() {
  secondValue = Number(outPut.innerText);
  if (plusFirsValue && secondValue) {
    outPut.innerText = add(plusFirsValue, secondValue);
    console.log(add(plusFirsValue, secondValue));
  } else if (subFirstValue && secondValue) {
    outPut.innerText = subtract(subFirstValue, secondValue);
    console.log(subtract(subFirstValue, secondValue));
  } else if (multFirstValue && secondValue) {
    outPut.innerText = multiply(multFirstValue, secondValue);
    console.log(multiply(multFirstValue, secondValue));
  } else if (divFirstValue && secondValue) {
    outPut.innerText = divide(divFirstValue, secondValue);
    console.log(divide(divFirstValue, secondValue));
  }
});
