const STORAGE_KEY = 'coinguard_transactions';

let transactions = [];

const form = document.getElementById('transactionForm');
const textInput = document.getElementById('textInput');
const amountInput = document.getElementById('amountInput');
const typeSelect = document.getElementById('typeSelect');
const errorMessage = document.getElementById('errorMessage');

const totalBalanceEl = document.getElementById('totalBalance');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const transactionListEl = document.getElementById('transactionList');
const emptyStateEl = document.getElementById('emptyState');

const convertBtn = document.getElementById('convertBtn');
const currencyStatusEl = document.getElementById('currencyStatus');
const currencyResultsEl = document.getElementById('currencyResults');
const usdValueEl = document.getElementById('usdValue');
const eurValueEl = document.getElementById('eurValue');


function loadFromLocalStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            transactions = JSON.parse(savedData);
        } catch (error) {
            console.error('Помилка читання localStorage:', error);
            transactions = [];
        }
    }
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function calculateStats() {
    return transactions.reduce((acc, trx) => {
        if (trx.type === 'income') {
            acc.totalIncome += trx.amount;
            acc.totalBalance += trx.amount;
        } else if (trx.type === 'expense') {
            acc.totalExpense += trx.amount;
            acc.totalBalance -= trx.amount;
        }
        return acc;
    }, { totalBalance: 0, totalIncome: 0, totalExpense: 0 });
}

function renderStats() {
    const { totalBalance, totalIncome, totalExpense } = calculateStats();

    totalBalanceEl.textContent = `${totalBalance.toLocaleString('uk-UA')} ₴`;
    totalIncomeEl.textContent = `+${totalIncome.toLocaleString('uk-UA')} ₴`;
    totalExpenseEl.textContent = `-${totalExpense.toLocaleString('uk-UA')} ₴`;
}

function renderTransactions() {
    transactionListEl.innerHTML = '';

    if (transactions.length === 0) {
        emptyStateEl.classList.remove('hidden');
        return;
    }

    emptyStateEl.classList.add('hidden');

    transactions.forEach(trx => {
        const li = document.createElement('li');
        li.className = `transaction-item ${trx.type}`;

        const isIncome = trx.type === 'income';
        const sign = isIncome ? '+' : '-';

        li.innerHTML = `
            <div class="trx-details">
                <span class="trx-text">${escapeHtml(trx.text)}</span>
                <span class="trx-date">${trx.date}</span>
            </div>
            <div class="trx-right">
                <span class="trx-amount ${trx.type}">${sign}${trx.amount.toLocaleString('uk-UA')} ₴</span>
                <button class="btn-delete" title="Видалити" data-id="${trx.id}">&times;</button>
            </div>
        `;

        transactionListEl.appendChild(li);
    });
}

function updateApp() {
    renderStats();
    renderTransactions();
    saveToLocalStorage();
}

function handleAddTransaction(e) {
    e.preventDefault();
    clearError();

    const text = textInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (!text) {
        showError('Будь ласка, вкажіть назву транзакції.');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        showError('Сума повинна бути числом, більшим за нуль.');
        return;
    }

    const newTransaction = {
        id: `trx-${Date.now()}`,
        text: text,
        amount: amount,
        type: type,
        date: new Date().toISOString().split('T')[0]
    };

    transactions.unshift(newTransaction);

    textInput.value = '';
    amountInput.value = '';
    typeSelect.value = 'expense';

    updateApp();
}

function handleDeleteTransaction(e) {
    if (!e.target.classList.contains('btn-delete')) return;

    const idToDelete = e.target.getAttribute('data-id');
    
    // Використовуємо filter для видалення об'єкта з масиву[cite: 9]
    transactions = transactions.filter(trx => trx.id !== idToDelete);

    updateApp();
}

async function fetchCurrencyRates() {
    currencyStatusEl.textContent = 'Отримання курсу...';
    currencyStatusEl.className = 'currency-status';
    currencyResultsEl.classList.add('hidden');

    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/UAH');
        
        if (!response.ok) {
            throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }

        const data = await response.json();
        const usdRate = data.rates.USD;
        const eurRate = data.rates.EUR;

        const { totalBalance } = calculateStats();

        const balanceInUSD = (totalBalance * usdRate).toFixed(2);
        const balanceInEUR = (totalBalance * eurRate).toFixed(2);

        usdValueEl.textContent = `$${balanceInUSD}`;
        eurValueEl.textContent = `€${balanceInEUR}`;

        currencyStatusEl.textContent = '';
        currencyResultsEl.classList.remove('hidden');

    } catch (error) {
        console.error('Помилка завантаження курсу:', error);
        currencyStatusEl.textContent = 'Помилка завантаження курсу валют';
        currencyStatusEl.className = 'currency-status error';
    }
}


function showError(msg) {
    errorMessage.textContent = msg;
}

function clearError() {
    errorMessage.textContent = '';
}

/**
 * Захист від XSS ін'єкцій у текстових полях
 */
function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (match) {
        const escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escapeMap[match];
    });
}

function initApp() {
    loadFromLocalStorage();
    renderStats();
    renderTransactions();

    // Слухачі подій
    form.addEventListener('submit', handleAddTransaction);
    transactionListEl.addEventListener('click', handleDeleteTransaction);
    convertBtn.addEventListener('click', fetchCurrencyRates);
}

document.addEventListener('DOMContentLoaded', initApp);