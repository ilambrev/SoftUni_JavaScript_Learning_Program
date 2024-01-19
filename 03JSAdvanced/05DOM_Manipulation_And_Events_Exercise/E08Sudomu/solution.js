function solve() {
    const inputFields = Array.from(document.querySelectorAll('input'));
    const [checkButton, clearButton] = Array.from(document.querySelectorAll('button'));
    const table = document.querySelector('table');
    const checkParagraph = document.querySelector('#check p');

    checkButton.addEventListener('click', showCheckResult);
    clearButton.addEventListener('click', clear);

    function check() {
        const pattern = '1 2 3';
        const inputFieldsValues = inputFields.map(f => Number(f.value));

        for (let i = 0; i < inputFieldsValues.length; i += 3) {
            const rowPattern = inputFieldsValues.slice(i, i + 3).sort((n1, n2) => n1 - n2).join(' ');
            const colPattern = inputFieldsValues.filter((n, index) => (index + 3 - (i / 3)) % 3 === 0).sort((n1, n2) => n1 - n2).join(' ');

            if (rowPattern !== pattern || colPattern !== pattern) {
                return false;
            }
        }

        return true;
    }

    function showCheckResult() {
        const checkResult = check();
        table.style.border = checkResult ? '2px solid green' : '2px solid red';
        checkParagraph.style.color = checkResult ? 'green' : 'red';
        checkParagraph.textContent = checkResult ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
    }

    function clear() {
        inputFields.map(input => input.value = '');
        table.style.border = 'none';
        checkParagraph.style.color = '';
        checkParagraph.textContent = '';
    }
}