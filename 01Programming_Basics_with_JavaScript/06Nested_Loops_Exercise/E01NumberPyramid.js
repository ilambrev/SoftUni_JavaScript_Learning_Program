function numberPyramid(input) {

    let n = Number(input[0]);

    let counter = 1;

    for (let i = 1; i <= n;) {
        let row = "";

        for (let j = 0; j < counter; j++) {
            let number = i + 1 * j

            if (number > n) {
                break;
            }

            row += number + " ";
        }

        console.log(row);
        i += counter;
        counter++;

    }
}

// numberPyramid(["7"]);
// numberPyramid(["12"]);
// numberPyramid(["15"]);