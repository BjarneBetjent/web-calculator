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
let operandUsed = true;

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

let firstNumber = "", secondNumber, operandChosen;

function numberClicked(number)
{
    operandUsed = false;
    mathString += number;
    fillDisplay();
}

function clearClicked()
{
    operandUsed = false;
    mathString = "";
    fillDisplay();
}

function operandClicked(operand)
{
    if(firstNumber == "")
    {
        firstNumber = mathString;
        operandChosen = operand;
    }   

    if(mathString.length < 1 || operandUsed == true) 
    {        
        return;
    }
    else if (operand == "=") solveMath();
    else
    {
        operandUsed = true;
        //mathString += " " + operand + " ";
        mathString += operand;
        fillDisplay();
    }
}

function fillDisplay()
{
    //Need to check for string length to adjust font size
    numberDisplay.textContent = mathString;
}

function solveMath()
{
    console.log("KAD ");
    console.log(mathString.split(operandChosen));
    //Change the mathString to the answer
    fillDisplay();

}
    // const category = document.querySelector(".mw-category");
    // const links = Array.from(category.querySelectorAll("a"));

    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes("de"));