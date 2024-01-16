function addItem() {
    const inputTextField = document.querySelector('#newItemText');
    const inputValueField = document.querySelector('#newItemValue');
    const menuField = document.querySelector('#menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = inputTextField.value;
    optionElement.value = inputValueField.value;

    menuField.appendChild(optionElement);

    inputTextField.value = '';
    inputValueField.value = '';
}