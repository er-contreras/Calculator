'use strict';

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

const outPut = document.getElementById('output');
const num = document.getElementsByClassName('number');
const addBtn = document.querySelector('.addOperator');
const equals = document.querySelector('.equals');
const subtractBtn = document.querySelector('.subtractOperator');
const multiplyBtn = document.querySelector('.multiplyOperator');
const divideBtn = document.querySelector('.divideOperator');
const allClear = document.querySelector('.ac');


let plusFirsValue;
let secondValue;
let subFirstValue;
let multFirstValue;
let divFirstValue;

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
