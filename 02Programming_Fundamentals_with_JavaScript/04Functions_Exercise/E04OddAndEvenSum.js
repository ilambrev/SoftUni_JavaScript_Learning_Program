function oddAndEvenSum(number) {

    let currentNumber = number;
    let sumOfOdds = 0;
    let sumOfEvens = 0;

    while (currentNumber > 0) {

        let digit = currentNumber % 10;

        if (digit % 2 === 0) {

            sumOfEvens += digit;

        } else {

            sumOfOdds += digit;

        }

        currentNumber = Math.floor(currentNumber / 10);

    }

    console.log(`Odd sum = ${sumOfOdds}, Even sum = ${sumOfEvens}`);

}

// oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);