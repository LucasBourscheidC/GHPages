import {initButtons} from "./startButtons";
initButtons();
const body = document.body;
const themesButton = document.querySelector('.themes-button');
const buttonsNumber = document.querySelectorAll('.button-number');
const buttonsArithmetic = document.querySelectorAll('.button-arithmetic');
let display = document.querySelector('.display');
let currentNumber = "0";
let typedNumber = "0";
let leftNumber = "0";
let rightNumber = "0";
let arithmetic = "";
let chosenArithmetic = false; 
const changeDisplay = (number)=>{
    display.innerText = number;
    currentNumber = number;
}

const newValor = (valor)=>{
    if(typedNumber[0] === "0")
    {
        if(isNaN(valor)){
            if(valor == "-")
            {
                typedNumber = valor;
                changeDisplay(typedNumber);
            }
            return;
        }
        typedNumber = valor;
        changeDisplay(typedNumber);
        return;
    }
    if(isNaN(valor))
    {
        arithmetic = valor;
        if(chosenArithmetic)
        {
            let newVal = "";
            for(let i = 0; i < typedNumber.length; i++)
            {
                if(isNaN(typedNumber[i]))
                {
                    newVal += valor;
                }
                else{
                    newVal += typedNumber[i];
                }
            }
            typedNumber = newVal;
            changeDisplay(typedNumber);
        }
        else{
            typedNumber = typedNumber + valor;
            changeDisplay(typedNumber);
            chosenArithmetic = true;
        }
        return;
    }
    typedNumber = typedNumber + valor;
    changeDisplay(typedNumber);
}

const sum = (num1, num2)=>{
    typedNumber = typedNumber + "+";
    changeDisplay(currentNumber);
    console.log("dkaso");
    return Number(num1) + Number(num2);
}
const subtraction = (num1, num2)=>{
    return Number(num1) - Number(num2);
}
const multiplication = (num1, num2)=>{
    return Number(num1) * Number(num2);
}
const division = (num1, num2)=>{
    return Number(num1) / Number(num2);
}
