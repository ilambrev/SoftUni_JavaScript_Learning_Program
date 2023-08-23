function diagonalSums(matrix) {

    let firstDiag = 0;
    let secondDiag = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiag += matrix[i][i];
        secondDiag += matrix[i][matrix[i].length - 1 - i];
    }

    console.log(firstDiag + ' ' + secondDiag);

}

/*
diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);
*/