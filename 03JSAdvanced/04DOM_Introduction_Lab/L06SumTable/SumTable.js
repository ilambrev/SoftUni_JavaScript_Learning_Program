function sumTable() {

    const tableTdElementsWithNumbers = Array.from(document.querySelectorAll('td'));

    let sum = 0;

    for (let i = 1; i < tableTdElementsWithNumbers.length - 1; i += 2) {
        sum += Number(tableTdElementsWithNumbers[i].textContent);
    }

    document.querySelector('#sum').textContent = sum;

}