function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

const container = document.querySelector(".container");
const buttons = Array.from(container.querySelectorAll("div"));
const numberDisplay = document.querySelector("#inner-display");
let mathString = "";
let operandUsed = true, equalUsed = false;
let mathArray = [];
let solvedArray = [];
let arrayIndex = 0;
let splitString = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {        
        let btnClicked = e.target.textContent;
        switch (btnClicked)
        {
            case "0":
                numberClicked(btnClicked);
                break;
            case "1":
                numberClicked(btnClicked);
                break;
            case "2":
                numberClicked(btnClicked);
                break;
            case "3":
                numberClicked(btnClicked);
                break;
            case "4":
                numberClicked(btnClicked);
                break;
            case "5":
                numberClicked(btnClicked);
                break;
            case "6":
                numberClicked(btnClicked);
                break;
            case "7":
                numberClicked(btnClicked);
                break;
            case "8":
                numberClicked(btnClicked);
                break;
            case "9":
                numberClicked(btnClicked);
                break;
            case "Clear":
                clearClicked();
                break;
            case ".":
                operandClicked(btnClicked);
                break;
            case "=":
                operandClicked(btnClicked);
                break;
            case "+":
                operandClicked(btnClicked);
                break;
            case "-":
                operandClicked(btnClicked);
                break;
            case "*":
                operandClicked(btnClicked);
                break;
            case "/":
                operandClicked(btnClicked);
                break;                
                
        }
    })
});

function numberClicked(number)
{
    if(equalUsed) mathString = "";
    equalUsed = false;
    console.table(mathArray);
    operandUsed = false;
    mathString += number;
    splitString += number;
    fillDisplay();
}

function operandClicked(operand)
{
    if(equalUsed) return;
    equalUsed = false;
    if(mathString.length < 1 || operandUsed == true) 
    {        
        return;
    }
    else if (operand == "=") solveMath();
    else
    {
        operandUsed = true;        
        if(operand == ".") 
        {
            if(splitString.includes(".")) return;
            splitString += operand;
            mathString += operand;
            fillDisplay();
        }
        else
        {
            mathString += operand;
            fillDisplay();
            mathArray.push(splitString);
            mathArray.push(operand);
            splitString = "";
        }
    }
}

function fillDisplay()
{
    numberDisplay.textContent = mathString;
}

function clearClicked()
{
    operandUsed = false;
    mathString = "";
    splitString = "";
    mathArray = [];
    fillDisplay();
}

function solveMath()
{
    operandUsed = true;
    if(equalUsed) return;
    equalUsed = true;
    mathArray.push(splitString);
    solveAllMulDiv();
    solveNonMulDiv();
    console.log(mathString);
    splitString = "";
    mathArray = [];
    fillDisplay();
}

function solveAllMulDiv()
{
    if(mathArray[mathArray.length - 1] == "+" || mathArray[mathArray.length - 1] == "-" 
    || mathArray[mathArray.length - 1] == "*" || mathArray[mathArray.length - 1] == "/") mathArray.pop();
    for(let i = 1; i < mathArray.length - 1; i += 2)
    {
        if(mathArray.length - 1 == i) break;
        if(mathArray[i] == "/")
        {
            if(mathArray[i+1] == 0)
            {
                alert("Cant divide by zero");
                clearClicked();
            }
            mathArray[i+1] = divide(mathArray[i-1], mathArray[i+1]);
            mathArray[i-1] = mathArray[i+1]
        }
        else if(mathArray[i] == "*")
        {
            mathArray[i+1] = multiply(mathArray[i-1], mathArray[i+1]);
            mathArray[i-1] = mathArray[i+1]
        }
    }
}

function solveNonMulDiv()
{
    let temp;
    for(let i = 1; i < mathArray.length - 1; i += 2)
    {
        if(mathArray.length - 1 == i) break;

        if(mathArray[i] == "+")temp = parseFloat(mathArray[i-1]) + parseFloat(mathArray[i+1]);     
        else if(mathArray[i] == "-") temp = mathArray[i-1] - mathArray[i+1];
        
        if(mathArray[i] == "/" || mathArray[i] == "*")
        {
            mathArray[i+1] = mathArray[i-1];
        }
        else mathArray[i+1] = temp;
    }
    mathString = mathArray[mathArray.length - 1];
}