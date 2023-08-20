const cartHistory = document.querySelector('#item-list');
const totalPriceElement = document.querySelector('#total-price');

let totalPrice = 0;

function updateTotalPrice() {
    totalPriceElement.innerText = totalPrice.toFixed(2);
}
function setValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

function addToCartHistory(itemName, itemPrice) {
    const autoNumber = cartHistory.querySelectorAll('p.text-md.font-semibold').length + 1;
    const itemInfo = document.createElement('p');
    itemInfo.classList.add('text-md', 'font-semibold');
    itemInfo.innerHTML = `<span>${autoNumber}. ${itemName}</span>`;
    cartHistory.appendChild(itemInfo);

    totalPrice += itemPrice;
    updateTotalPrice();

    const btnApply = document.getElementById('btn-apply');
    if (totalPrice >= 200) {
        btnApply.disabled = false;
    }
}

const productCards = document.querySelectorAll('.card-one');
productCards.forEach(card => {
    const itemName = card.querySelector('.card-title').innerText;
    const itemPrice = parseFloat(card.querySelector('.card-body p').innerText);

    card.addEventListener('click', () => {
        addToCartHistory(itemName, itemPrice);
    });
});

const couponBtn = document.getElementById('btn-apply').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-field');
    const couponFieldValue = couponField.value;

    // console.log(couponFieldValue);
    if (couponFieldValue == "SELL200") {
        // console.log('OK');
        addDiscount = totalPrice * 0.2;
        setValueById('discount-price', addDiscount);
        const finalTotal = totalPrice - addDiscount;
        setValueById('final-total-price', finalTotal);
        couponField.value = '';
    }
    else {
        alert('Coupon not valid');
        couponField.value = '';
    }
});

const purchaseBtn = document.getElementById('btn-purchase').addEventListener('click', function () {

});

const homeBtn = document.getElementById('btn-home').addEventListener('click', function () {
    window.location.href = 'index.html';
    finalTotal.innerText = '';
    addDiscount.innerText = '';
    totalPrice.innerText = '';
    
});