function magicMatrices(matrix) {

    let isMatrixMagic = true;
    let sumOfCells = 0;

    for (let i = 0; i < matrix.length; i++) {

        let currentSumOfCells = 0;

        for (let j = 0; j < matrix.length; j++) {

            currentSumOfCells += matrix[i][j];

        }

        if (i === 0) {

            sumOfCells = currentSumOfCells;

        } else {

            if (currentSumOfCells !== sumOfCells) {

                isMatrixMagic = false;

            }

        }

        if (!isMatrixMagic) {

            break;

        }

    }

    if (isMatrixMagic) {

        for (let i = 0; i < matrix.length; i++) {

            let currentSumOfCells = 0;

            for (j = 0; j < matrix.length; j++) {

                currentSumOfCells += matrix[j][i];

            }

            if (currentSumOfCells !== sumOfCells) {

                isMatrixMagic = false;

            }

            if (!isMatrixMagic) {

                break;

            }

        }

    }

    console.log(isMatrixMagic);

}

// magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);