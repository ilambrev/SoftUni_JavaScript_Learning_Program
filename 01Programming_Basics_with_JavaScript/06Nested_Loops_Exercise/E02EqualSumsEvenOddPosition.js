function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let resultNumbers = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let sumOfEvens = 0;
        let sumOfOdds = 0;
        let currentNum = i;

        for (let j = 1; j <= 6; j++) {
            let digit = currentNum % 10;
            currentNum = Math.floor(currentNum / 10);

            if (j % 2 === 0) {
                sumOfOdds += digit;
            } else {
                sumOfEvens += digit;
            }
        }

        if (sumOfEvens === sumOfOdds) {
            resultNumbers += i + " ";
        }

    }

    console.log(resultNumbers);

}

// equalSumsEvenOddPosition(["100000", "100050"]);
// equalSumsEvenOddPosition(["123456", "124000"]);
// equalSumsEvenOddPosition(["299900", "300000"]);
// equalSumsEvenOddPosition(["100115", "100120"]);