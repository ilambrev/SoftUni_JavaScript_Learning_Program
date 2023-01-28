function specialNumbers(input) {

    let n = Number(input[0]);
    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let isNumberSpecial = true;
        let currentNum = i;

        while (currentNum > 0) {
            let currentDigit = currentNum % 10;
            currentNum = Math.floor(currentNum / 10);

            if (n % currentDigit !== 0) {
                isNumberSpecial = false;
                break;
            }

        }

        if (isNumberSpecial) {
            result += i + " ";
        }
    }

    console.log(result);

}

// specialNumbers(["3"]);
// specialNumbers(["11"]);
// specialNumbers(["16"]);