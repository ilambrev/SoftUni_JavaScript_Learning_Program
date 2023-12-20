function addItem() {
    
    const inputTextElement = document.querySelector('#newItemText');
    const itemsListElement = document.querySelector('#items');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputTextElement.value;

    itemsListElement.appendChild(newItemElement);
    
    inputTextElement.value = '';
}