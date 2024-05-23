const form = document.getElementById('conversion-form');
const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const result = document.getElementById('result');

// Replace with actual conversion rates
const conversionRates = {
    USD: 5.25,
    EUR: 6.05,
    GBP: 7.15,
    BRL: 1,
    CAD: 3.95,
    CHF: 5.55,
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    if (isNaN(amountValue)) {
        result.textContent = 'Please enter a valid amount.';
        return;
    }

    const conversionRate = conversionRates[fromCurrencyValue] / conversionRates[toCurrencyValue];
    const convertedAmount = (amountValue * conversionRate).toFixed(2);

    result.textContent = `${amountValue} ${fromCurrencyValue} é igual a ${convertedAmount} ${toCurrencyValue}.`;
});