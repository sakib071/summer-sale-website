function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.innerText;
    return inputElementValue;
}

document.getElementById("card-one").addEventListener("click", function () {
    const itemCard = getInputValueById("item-one");
    // const item = itemCard.innerText;
    console.log(itemCard);
})