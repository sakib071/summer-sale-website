const cartHistory = document.querySelector('#item-list');
const totalPriceElement = document.querySelector('#total-price');

let totalPrice = 0;

function updateTotalPrice() {
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

function addToCartHistory(itemName, itemPrice) {
    const autoNumber = cartHistory.querySelectorAll('p.text-md.font-semibold').length + 1;
    const itemInfo = document.createElement('p');
    itemInfo.classList.add('text-md', 'font-semibold');
    itemInfo.innerHTML = `<span>${autoNumber}. ${itemName}</span>`;
    cartHistory.appendChild(itemInfo);

    totalPrice += itemPrice;
    updateTotalPrice();
}

const productCards = document.querySelectorAll('.card-one');
productCards.forEach(card => {
    const itemName = card.querySelector('.card-title').innerText;
    const itemPrice = parseFloat(card.querySelector('.card-body p').innerText);

    card.addEventListener('click', () => {
        addToCartHistory(itemName, itemPrice);
    });
});
