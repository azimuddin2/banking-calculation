function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newAmountText = inputField.value;
    const newAmountValue = parseFloat(newAmountText);
    // clear the input field..!
    inputField.value = '';
    return newAmountValue;
}

function previousTotalAmount(amountId, newAmount){
    const totalElement = document.getElementById(amountId);
    const totalElementText = totalElement.innerText;
    const previousTotalElementAmount = parseFloat(totalElementText);
    totalElement.innerText = previousTotalElementAmount + newAmount;
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const PreviousTotalBalance = parseFloat(totalBalanceText);
    return PreviousTotalBalance;
}

function updateBalance(newBalance, isAdd){
    const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const PreviousTotalBalance = parseFloat(totalBalanceText);
    const PreviousTotalBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = PreviousTotalBalance + newBalance;
    }
    else{
        totalBalance.innerText = PreviousTotalBalance - newBalance;
    }
}

//  handle deposit button event..!
document.getElementById('deposit-button').addEventListener('click', function (){
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        previousTotalAmount('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
})

// handle withdraw button event..!
document.getElementById('withdraw-button').addEventListener('click', function (){
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        previousTotalAmount('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false)
    }
    else if(newWithdrawAmount > currentBalance){
        console.log('You can not withdraw more than what your in your account..!')
    }
})