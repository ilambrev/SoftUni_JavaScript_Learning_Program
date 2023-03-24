function spiralMatrix(rows, cols) {

    let matrix = [];

    let counter = 1;
    let elementsNumber = rows * cols;

    let rowPosition = 0;
    let colPosition = 0;

    let direction = 'right';

    for (let i = 0; i < rows; i++) {

        let row = [];

        for (let j = 0; j < cols; j++) {

            row.push(0);

        }

        matrix.push(row);

    }

    while (counter <= elementsNumber) {

        switch (direction) {

            case 'right':

                if (colPosition >= 0 && colPosition < cols && matrix[rowPosition][colPosition] === 0) {

                    matrix[rowPosition][colPosition] = counter;

                    if (colPosition < cols - 1 && matrix[rowPosition][colPosition + 1] === 0) {

                        colPosition++;

                    } else if (rowPosition < rows - 1) {

                        rowPosition++;
                        direction = 'down';

                    }


                }

                break;

            case 'down':

                if (rowPosition >= 0 && rowPosition < rows && matrix[rowPosition][colPosition] === 0) {

                    matrix[rowPosition][colPosition] = counter;

                    if (rowPosition < rows - 1 && matrix[rowPosition + 1][colPosition] === 0) {

                        rowPosition++;

                    } else if (colPosition > 0) {

                        colPosition--;
                        direction = 'left';

                    }

                }

                break;

            case 'left':

                if (colPosition >= 0 && colPosition < cols && matrix[rowPosition][colPosition] === 0) {

                    matrix[rowPosition][colPosition] = counter;

                    if (colPosition > 0 && matrix[rowPosition][colPosition - 1] === 0) {

                        colPosition--;

                    } else if (rowPosition > 0) {

                        rowPosition--;
                        direction = 'up';

                    }

                }

                break;

            case 'up':

                if (rowPosition >= 0 && rowPosition < rows && matrix[rowPosition][colPosition] === 0) {

                    matrix[rowPosition][colPosition] = counter;

                    if (rowPosition > 0 && matrix[rowPosition - 1][colPosition] === 0) {

                        rowPosition--;

                    } else if (colPosition < cols - 1) {

                        colPosition++;
                        direction = 'right';

                    }

                }

                break;

        }


        counter++;

    }

    for (let i = 0; i < matrix.length; i++) {

        console.log(matrix[i].join(' '));

    }


}

// spiralMatrix(5, 5);
// spiralMatrix(3, 3);