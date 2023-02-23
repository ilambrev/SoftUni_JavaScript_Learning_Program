function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {

        let row = '';

        for (let j = 1; j <= i; j++) {

            if (j < i) {
                row += i + ' ';
            } else {
                row += i;
            }
        }

        console.log(row);
    }

}

// triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);