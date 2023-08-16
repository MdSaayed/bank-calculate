// default value
let currentDeposit = 0;
let currentWithdraw = 0;
let currentBalance = 0;

// geting input value 
function getInputValueById(inputId) {
    const inputElemet = document.getElementById(inputId);
    const inputValue = parseFloat(inputElemet.value);
    inputElemet.value = '';
    return inputValue;
}

// display update value
function displayUpdateValue(elementId, amount) {
    var element = document.getElementById(elementId);
    element.innerText = '$'+amount;
}
