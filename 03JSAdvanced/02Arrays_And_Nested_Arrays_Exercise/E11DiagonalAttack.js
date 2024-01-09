function diagonalAttack(input) {

    const matrix = input.reduce((acc, curr) => {
        acc.push(curr.split(' ').map(d => Number(d)));

        return acc;
    }, []);

    function mainDiagValue() {
        return matrix.reduce((acc, curr, i) => {
            acc += curr[i];
            return acc;
        }, 0);
    }

    function antiDiagValue() {
        return matrix.reduce((acc, curr, i) => {
            acc += curr[curr.length - 1 - i];
            return acc;
        }, 0);
    }

    function changeMatrixValues(value) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && (i + j) !== matrix[i].length - 1) {
                    matrix[i][j] = value;
                }
            }
        }
    }

    function printMatrix() {
        console.log(matrix.map(r => r.join(' ')).join('\n'));
    }

    if (mainDiagValue() === antiDiagValue()) {
        changeMatrixValues(mainDiagValue());
    }

    printMatrix();
}

// diagonalAttack([
//     '5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1'
// ]);

// diagonalAttack([
//     '1 1 1',
//     '1 1 1',
//     '1 1 0'
// ]);