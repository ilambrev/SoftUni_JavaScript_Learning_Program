function minNumber(input) {

    let numberAsString = input[0];
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (numberAsString !== "Stop") {
        let currentNumber = Number(input[index]);

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }

        index++;

        numberAsString = input[index];
    }

    console.log(minNumber);
}

// minNumber(["100", "99", "80", "70", "Stop"]);
// minNumber(["-10", "20", "-30", "Stop"]);
// minNumber(["45", "-20", "7", "99", "Stop"]);
// minNumber(["999", "Stop"]);
// minNumber(["-1", "-2", "Stop"]);