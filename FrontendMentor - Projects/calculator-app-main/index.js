import { initButtons } from "./initButtons.js";

const body = document.body;
let display = document.querySelector('.display');
let currentNumber = "0";
let typedNumber = "0";
let operation = undefined;
let operationIndex = undefined;

const changeDisplay = (number)=>{
    display.innerText = number;
    currentNumber = number;
}

const newCharacter = (character)=>{
    if(isNaN(character))
    {
        handleArithmeticInput(character);
        return;
    }
    else if(typedNumber[0] === "0")
    {
        typedNumber = character;
        changeDisplay(typedNumber);
    }
    else if(typedNumber[typedNumber.length-1] === "0" && isNaN(typedNumber[typedNumber.length-2]))
    {
        typedNumber = typedNumber.slice(0, typedNumber.length-1) + character;
        changeDisplay(typedNumber);
    }
    else{
        typedNumber = typedNumber + character;
        changeDisplay(typedNumber);
    }
    
}

const handleArithmeticInput = (arithmeticInput) => {
    const arithmeticIndex = changeArithmetic();
    console.log(arithmeticIndex);
    if(typedNumber[0] === "0")
    {
        if(arithmeticInput === "-")
        {
            typedNumber = arithmeticInput;
            changeDisplay(typedNumber);
        }
        return;
    }
    else if(arithmeticIndex === 0){
        console.log("ETANTANDO1")
        operationIndex = arithmeticIndex + 1;
        console.log("opreoperationIndex 44444", operationIndex)
        typedNumber += arithmeticInput;
        changeDisplay(typedNumber);
        return;
    }
    else if(arithmeticInput === "-")
    {
        if(typedNumber[arithmeticIndex] === "+")
        {
            console.log("ETANTANDO2")
            operationIndex = arithmeticIndex + 1;
            console.log("opreoperationIndex 2", operationIndex)
            typedNumber = typedNumber.slice(0, arithmeticIndex) + arithmeticInput;
            changeDisplay(typedNumber);
        }
        else if((typedNumber[arithmeticIndex] === "x" || 
        typedNumber[arithmeticIndex] === "/") &&
        isNaN(typedNumber[typedNumber.length-1]))
        {
            console.log("ETANTANDO3")
            typedNumber += arithmeticInput;
            changeDisplay(typedNumber);
        }
        else if (!(isNaN(typedNumber[arithmeticIndex]))){
            console.log("ETANTANDO4")
            operationIndex = arithmeticIndex + 1;
            console.log("opreoperationIndex 3", operationIndex)
            typedNumber += arithmeticInput;
            changeDisplay(typedNumber);
        }
        return;
    }
    else if (isNaN(typedNumber[arithmeticIndex]))
    {
        if(!(isNaN(typedNumber[arithmeticIndex - 1])))
        {
            operationIndex = arithmeticIndex;
            console.log("opreoperationIndex", operationIndex)
            typedNumber = typedNumber.slice(0, arithmeticIndex) + arithmeticInput;
            changeDisplay(typedNumber);
        }
        else{
            operationIndex = arithmeticIndex - 1;
            console.log("opreoperationIndex", operationIndex)
            typedNumber = typedNumber.slice(0, arithmeticIndex- 1) + arithmeticInput;
            changeDisplay(typedNumber);
        }
        return;
    }
    operationIndex = arithmeticIndex + 1;
    console.log("opreoperationIndex", operationIndex)
    typedNumber += arithmeticInput;
    changeDisplay(typedNumber);
}

const changeArithmetic = ()=>{
    if(typedNumber.length > 1)
    {
        for(let i = typedNumber.length-1; i > 0 ; i--)
        {
            if(isNaN(typedNumber[i]) && typedNumber[i] != ".")
                return i;
        }
        return typedNumber.length-1;
        console.log("1")
    }
    else{
        console.log("2")
        return typedNumber.length-1;
    }
}

const result = ()=>{
    let leftNumber = Number(typedNumber.slice(0, operationIndex));
    let rightNumber = Number(typedNumber.slice(operationIndex + 1, typedNumber.length));
    switch (typedNumber[operationIndex])
    {
        case "+":
            console.log(leftNumber)
            console.log(rightNumber)
            sum(leftNumber, rightNumber);
            break;
        case "-":
            console.log(leftNumber)
            console.log(rightNumber)
            subtraction(leftNumber, rightNumber);
            break;
        case "/":
            console.log(leftNumber)
            console.log(rightNumber)
            division(leftNumber, rightNumber);
            break;
        case "x":
            console.log(leftNumber)
            console.log(rightNumber)
            multiplication(leftNumber, rightNumber);
            break;
        default:
    }
}
const reset = ()=>{
    typedNumber = "0";
    changeDisplay(typedNumber);
}
const del = ()=>{
    if(typedNumber.length - 1 === 0)
    {
        typedNumber = "0";
        changeDisplay(typedNumber);
        return;
    }
    typedNumber = typedNumber.slice(0, typedNumber.length - 1);
    changeDisplay(typedNumber);
}
const sum = (num1, num2)=>{
   typedNumber = (num1 + num2).toString();
   changeDisplay(typedNumber);
}
const subtraction = (num1, num2)=>{
    typedNumber = (num1 - num2).toString();
    changeDisplay(typedNumber);
}
const multiplication = (num1, num2)=>{
    typedNumber = (num1 * num2).toString();
    changeDisplay(typedNumber);
}
const division = (num1, num2)=>{
    typedNumber = (num1 / num2).toString();
    changeDisplay(typedNumber);
}
initButtons(newCharacter, reset, result, del);

