function solve() {

    const inputElement = document.querySelector('#input');
    const selectMenuTo = document.querySelector('#selectMenuTo');
    const convertItButton = document.querySelector('#container');
    const outputElement = document.querySelector('#result');

    selectMenuTo.innerHTML = '';

    const convertToBinaryOption = document.createElement('option');
    convertToBinaryOption.value = 'binary';
    convertToBinaryOption.textContent = 'Binary';

    const convertToHexadecimalOption = document.createElement('option');
    convertToHexadecimalOption.value = 'hexadecimal';
    convertToHexadecimalOption.textContent = 'Hexadecimal';

    selectMenuTo.appendChild(convertToBinaryOption);
    selectMenuTo.appendChild(convertToHexadecimalOption);

    convertItButton.addEventListener('click', (e) => {

        e.preventDefault();

        const selectedOption = selectMenuTo.value;
        const inputNumber = Number(inputElement.value);

        let result = '';

        if (selectedOption === 'binary') {
            result = inputNumber.toString(2);
        } else if (selectedOption === 'hexadecimal') {
            result = inputNumber.toString(16).toUpperCase();
        }

        outputElement.value = result;
    });

}