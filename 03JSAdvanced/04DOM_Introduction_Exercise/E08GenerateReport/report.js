function generateReport() {

    const tableHeadCells = Array.from(document.querySelectorAll('table thead tr th'));
    const tableBodyCells = Array.from(document.querySelectorAll('table tbody tr'));
    const outputTextArea = document.querySelector('#output');

    const result = tableBodyCells.reduce((acc, curr) => {

        const rowData = Array.from(curr.querySelectorAll('td')).map(td => td.textContent);

        const rowSelectedData = tableHeadCells.reduce((acc, curr, index) => {

            const columnName = (curr.textContent).trim().toLowerCase();

            const inputElement = curr.querySelector('input');

            if (inputElement.checked === true) {
                acc[columnName] = rowData[index];
            }

            return acc;
        }, {});

        acc.push(rowSelectedData);

        return acc;
    }, []);

    outputTextArea.value = JSON.stringify(result, null, 2);

}