function matrixNxN(n) {

    function setMatrix(n) {

        let matrix = '';

        for (let i = 0; i < n; i++) {

            let row = '';

            for (let j = 0; j < n; j++) {

                row += j < (n - 1) ? n + ' ' : n;

            }

            matrix += i < (n - 1) ? row + '\n' : row;

        }

        return matrix;

    }

    console.log(setMatrix(n));

}

// matrixNxN(3);
// matrixNxN(7);
// matrixNxN(2);