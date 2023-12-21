function deleteByEmail() {

    const inputElement = document.querySelector("input[name='email']");
    const tableRowsElements = Array.from(document.querySelectorAll('tbody tr'));
    const resultElement = document.querySelector('#result');

    const elementTodelete = tableRowsElements.filter(r => r.querySelector('td:nth-of-type(2)').textContent === inputElement.value)[0];

    if (elementTodelete) {
        elementTodelete.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    inputElement.value = '';
}