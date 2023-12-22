function addItem() {

    const inputTextElement = document.querySelector('#newItemText');
    const itemsListElement = document.querySelector('#items');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputTextElement.value;

    const deleteAnchorElement = document.createElement('a');
    deleteAnchorElement.href = '#';
    deleteAnchorElement.textContent = '[Delete]';
    deleteAnchorElement.addEventListener('click', deleteRow);

    newItemElement.appendChild(deleteAnchorElement);

    itemsListElement.appendChild(newItemElement);

    inputTextElement.value = '';

    function deleteRow(e) {
        e.currentTarget.parentElement.remove();
    }
}