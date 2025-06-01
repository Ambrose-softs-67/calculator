
// variables for each part of operation
let firstNumber=""
let theOperator =""
let secondNumber=""
let isSecondNumber=false

const screenDisplay=document.querySelector(".screen-container")
const numberButtons=document.querySelectorAll(".number")
const operators=document.querySelectorAll(".operator")
const equalSign=document.querySelector("#equal-sign")
const clearBtn=document.querySelector("#clear-button")
const backSpaceBtn=document.querySelector("#back-space")

//operation function
const Operation=(operate,a,b)=>{
    a=Number(a)
    b=Number(b) 
    switch(operate){
        case "+": return a+b;
        case "-": return a-b;
        case "/": return b!==0?a/b:"Cannot be divided by zero"
        case "*": return a*b
        default:"Invalid operator"}
    };
    

//Number buttons
numberButtons.forEach((numberButton)=>{
    numberButton.addEventListener("click",()=>{
      if(!isSecondNumber){
        firstNumber+=numberButton.id;
        screenDisplay.textContent=firstNumber
      }else{
        secondNumber=numberButton.id;
        screenDisplay.textContent=secondNumber
      }
    })
})

//operator buttons
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        theOperator=operator.id
        isSecondNumber=true
    })
})

//equal-sign button
equalSign.addEventListener("click",()=>{
    if(firstNumber&&secondNumber&&theOperator){
        const operationResult=Operation(theOperator,firstNumber,secondNumber)
        screenDisplay.textContent=operationResult;
    }
})

//back-space button
backSpaceBtn.addEventListener("click",()=>{
    if (!isSecondNumber && firstNumber.length > 0) {
        firstNumber = firstNumber.slice(0, -1);
        screenDisplay.textContent = firstNumber || "0";
      } else if (isSecondNumber && secondNumber.length > 0) {
        secondNumber = secondNumber.slice(0, -1);
        screenDisplay.textContent = secondNumber || "0";
      }
})


//clear button for new operation
clearBtn.addEventListener("click",()=>{
firstNumber="";
secondNumber="";
theOperator="";
isSecondNumber=false;
screenDisplay.textContent="0"
})