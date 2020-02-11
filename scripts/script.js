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
                numberClicked(btnClicked);
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
    console.log(number);
}

function clearClicked()
{
    console.log("clear clicked");
}

function operandClicked(operand)
{
    console.log(operand);
    
}
    // const category = document.querySelector(".mw-category");
    // const links = Array.from(category.querySelectorAll("a"));

    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes("de"));