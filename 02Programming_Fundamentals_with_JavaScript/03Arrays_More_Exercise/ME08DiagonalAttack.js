function diagonalAttack(input) {

    let matrix = [];

    for (let i = 0; i < input.length; i++) {

        let row = input[i].split(' ');

        for (let j = 0; j < row.length; j++) {

            row[j] = Number(row[j]);

        }

        matrix.push(row);

    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {

        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix.length - 1 - i];

    }


    if (firstDiagonalSum === secondDiagonalSum) {

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix.length; j++) {

                if (j !== i && j !== matrix.length - 1 - i) {

                    matrix[i][j] = firstDiagonalSum;

                }

            }

        }

    }


    for (let row of matrix) {

        console.log(row.join(' '));

    }

}

// diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
// diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);