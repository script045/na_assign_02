let deposit_text = document.getElementById('deposit_text');
let withdraw_text = document.getElementById('withdraw_text');
let balance_text = document.getElementById('balance_text');
let amountInput = document.getElementById('amount');

let totalDeposit = 0.00;
let totalWithdraw = 0.00;
let totalBalance = 0.00;

function updateDisplay() {
    deposit_text.textContent = '$' + totalDeposit;
    withdraw_text.textContent = '$' + totalWithdraw;
    balance_text.textContent = '$' + totalBalance;
}

function highlightCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.add('highlight');
    setTimeout(() => card.classList.remove('highlight'), 500);
}

function handleDeposit() {
    const amount = parseFloat(amountInput.value);

    if (amount <= 0 || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    totalDeposit += amount;
    totalBalance += amount;
    updateDisplay();
    highlightCard('deposit_card');
    highlightCard('balance_card');
    amountInput.value = '';
}

function handleWithdraw() {

    const amount = parseFloat(amountInput.value);

    if (amount <= 0 || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    if (amount > totalBalance) {
        alert('Insufficient Balance');
        return;
    }

    totalWithdraw += amount;
    totalBalance -= amount;
    updateDisplay();
    highlightCard('withdraw_card');
    highlightCard('balance_card');
    amountInput.value = '';
}

        // Prevent negative values in input
        amountInput.addEventListener('input', function(e) {
            if (this.value < 0) {
                this.value = '';
                alert('Negative values are not allowed');
            }
        });