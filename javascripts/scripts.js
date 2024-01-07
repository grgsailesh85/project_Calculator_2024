const resultElement = document.getElementById('result')
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtns=document.querySelectorAll('.number');

//Initialize the variables
let result ='';
let operation='';
let previousOperand = 0;



// Function to append numnber
const appendNumber = (number) => {
  result += number;
  resultElement.innerText=result;
}




//Add event listener to number buttons
numberBtns.forEach(button => {
  button.addEventListener('click',() =>{
    appendNumber(button.innerText);
  });
});