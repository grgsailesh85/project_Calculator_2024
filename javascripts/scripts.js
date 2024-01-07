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
let operation=''; //operator such as add subtract multiply and divide
let previousOperand = 0; // initial value before we click operation




// Function to append numnber
const appendNumber = (number) => {
  //checks if the number is period(.) and if the result contain a period
  if(number === '.' && result.includes('.')) {
    return; // exit the function to avoid adding another period
  }
  result += number;
  updateDisplay();
}

//function to update display
const updateDisplay = () => {
  if(operation){
    resultElement.innerText = `${previousOperand} ${operation} ${result}`;
  }
  else{
    resultElement.innerText=result;
  }
  
}

//function to select operator
const selectOperator=(operatorValue)=>{
  if(result ==='') { //checks if the value of the 'result' variable is an empty string. an empty string represents no character at all.
    return; // if condition is true , the 'return;' statement is executed causing the function to exit immediately
  } 
  if( operation !== '' && previousOperand !== ''){
    calculateResult();
  }
  operation = operatorValue;
  previousOperand = result;
  result='';
  updateDisplay();
}

//function to calculate result
const calculateResult = () => {
  let evalutedResult;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(result);

  //Checks if the 'prev' and 'current' is NaN (Not-a-Number) and returns from function if the condition is ture. It is used to handle cases where we want to avoid performing operations or calculation if the input values are not valid number
  if (isNaN(prev) || isNaN(current)){ 
    return;
  }
  switch(operation){
    case '+' :
      evalutedResult = prev + current;
      break;
    case '-' :
      evalutedResult = prev - current;
      break;
    case '*' :
      evalutedResult = prev * current;
      break;
    case '/' :
      evalutedResult = prev / current;
      break;
    default:
      return;
  }
  result = evalutedResult.toString();
  operation = ''; // becomes null value after calculation
  previousOperand = ''; //becomes null after calculation


}

//Add event listener to number buttons
numberBtns.forEach(button => {
  button.addEventListener('click',() =>{
    appendNumber(button.innerText);
  });
});

//function to clear display
const clearDisplay = () =>{
  result = '';
  previousOperand = ''
  operation = '';
  updateDisplay();
}

//function to delete last character
// const deleteLastDigit = () =>{
//   if(result==='') return;
//   result = result.slice(0,-1); // remove last character from the string stored in the variable 'result'.
//   updateDisplay();
// }
const deleteLastDigit = () => {
  if (operation !== "" && result === "") {
    // Condition: If there is an operation and no result,
    // set operation to an empty string, result to previousOperand,
    // and previousOperand to an empty string.
    operation = "";
    result = previousOperand;
    previousOperand = "";
    updateDisplay(); // Update the display with the new values.
  } else {
    // If the above condition is not met,
    // remove the last character from the result.
    result = result.slice(0, -1);
    updateDisplay(); // Update the display with the modified result.
  }
};


//add event listener to decimal number and ooperator
decimalBtn.addEventListener('click',()=>appendNumber('.'));
addBtn.addEventListener('click',()=>selectOperator('+'));
subtractBtn.addEventListener('click',()=>selectOperator('-'));
multiplyBtn.addEventListener('click',()=>selectOperator('*'));
divideBtn.addEventListener('click',()=> selectOperator('/'));
equalBtn.addEventListener('click',() => {
  if(result === ''){
    return;
  }
  calculateResult();
  updateDisplay();
});
clearBtn.addEventListener('click',clearDisplay);
deleteBtn.addEventListener('click', deleteLastDigit);



