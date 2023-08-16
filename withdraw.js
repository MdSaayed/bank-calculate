document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw = getInputValueById('withdraw-feild');
    if (newWithdraw) {
        currentWithdraw += newWithdraw;
        if (currentBalance >= newWithdraw) {
            currentBalance -= newWithdraw;
            displayUpdateValue('withdraw-display', currentWithdraw);
            displayUpdateValue('balance-display', currentBalance);
        }else{
            alert('Your balance is not enough. Your current balance is $'+ currentBalance);
        }

    } else {
        alert('Please input a valid amount.');
    }


});