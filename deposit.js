// event handlers
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDeposit = getInputValueById('deposit-feild');
    // if input a value the code will be work 
    if (newDeposit) {
        currentDeposit += newDeposit;
        currentBalance += newDeposit;
        displayUpdateValue('deposit-display', currentDeposit);
        displayUpdateValue('balance-display', currentBalance);
    } else {
        alert('Please input a valid amount.');
    }
});



