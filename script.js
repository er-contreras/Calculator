'use strict';

// Functions of Operators
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

// Calling Operators
const addOperator = document.querySelector('.addOperator');
const subtractOperator = document.querySelector('.subtractOperator');
const multiplyOperator = document.querySelector('.multiplyOperator');
const divideOperator = document.querySelector('.divideOperator');

// Ccalling current operand
const currentOperand = document.querySelector('current-operand');
const previousOperand = document.querySelector('previous-operand');

// Numbers
// let numberOne = document.querySelector('.number-one');
// let numberTwo = document.querySelector('.number-two');
// let numberThree = document.querySelector('.number-three');
// let numberFour = document.querySelector('.number-four');
// let numberFive = document.querySelector('.number-five');
// let numberSix = document.querySelector('.number-six');
// let numberSeven = document.querySelector('.number-seven');
// let numberEight = document.querySelector('.number-eight');
// let numberNine = document.querySelector('.number-nine');
// let numberCero = document.querySelector('.number-cero');


// Displaying numbers in the console and in the div current operand.
const displaying = function() {
  // numberOne.addEventListener('click', function() {
  //   numberOne = Number('1');
  //   console.log(numberOne);
  //   document.getElementById('current-operand').textContent = 1;

    const input = document.querySelector('input');
    document.querySelectorAll('.number').forEach(function (button, index) {
      button.addEventListener('click', function () {
        input.value += index + 1;
      });
    });
  // });

  // numberTwo.addEventListener('click', function() {
  //   numberTwo = Number('2');
  //   console.log(numberTwo);
  //   document.getElementById('current-operand').textContent = 2;
  // });

  // numberThree.addEventListener('click', function() {
  //   numberThree = Number('3');
  //   console.log(numberThree);
  // });
  
  // numberFour.addEventListener('click', function() {
  //   numberFour = Number('4');
  //   console.log(numberFour);
  // });

  // numberFive.addEventListener('click', function() {
  //   numberFive = Number('5');
  //   console.log(numberFive);
  // });

  // numberSix.addEventListener('click', function() {
  //   numberSix = Number('6');
  //   console.log(numberSix);
  // });

  // numberSeven.addEventListener('click', function() {
  //   numberSeven = Number('7');
  //   console.log(numberSeven);
  // });

  // numberEight.addEventListener('click', function() {
  //   numberEight = Number('8');
  //   console.log(numberEight);
  // });

  // numberNine.addEventListener('click', function() {
  //   numberNine = Number('9');
  //   console.log(numberNine);
  // });

  // numberCero.addEventListener('click', function() {
  //   numberCero = Number('0');
  //   console.log(numberCero);
  // });
};

// Operate with operators
function operate() {
  addOperator.addEventListener('click', function() {
    const userNumberOne = Number(prompt('Choose the first number'));
    const userNumberTwo = Number(prompt('Choose the second number'));
    console.log(add(userNumberOne, userNumberTwo));
  });

  subtractOperator.addEventListener('click', function() {
    const userNumberOne = Number(prompt('Choose the first number'));
    const userNumberTwo = Number(prompt('Choose the second number'));
    console.log(subtract(userNumberOne, userNumberTwo));
  });

  multiplyOperator.addEventListener('click', function() {
    const userNumberOne = Number(prompt('Choose the first number'));
    const userNumberTwo = Number(prompt('Choose the second number'));
    console.log(multiply(userNumberOne, userNumberTwo));
  });

  divideOperator.addEventListener('click', function() {
    const userNumberOne = Number(prompt('Choose the first number'));
    const userNumberTwo = Number(prompt('Choose the second number'));
    console.log(divide(userNumberOne, userNumberTwo));
  });
};

operate();
displaying();