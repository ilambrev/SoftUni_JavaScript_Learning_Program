function magicMatrices(matrix) {

    let checkSumOfElements = elements => elements.reduce((acc, curr) => acc += curr, 0);

    let firstRowSum = checkSumOfElements(matrix[0]);

    let isMatrixMagic = true;

    if (isMatrixMagic == true) {
        for (let i = 0; i < matrix.length; i++) {

            let column = [];

            for (let j = 0; j < matrix.length; j++) {
                column.push(matrix[j][i]);
            }

            if (checkSumOfElements(matrix[i]) !== firstRowSum || checkSumOfElements(column) !== firstRowSum) {
                isMatrixMagic = false;
                break;
            }
        }

    }

    console.log(isMatrixMagic);

}

/*
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
*/