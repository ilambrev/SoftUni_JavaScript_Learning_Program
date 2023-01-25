function sumOfTwoNumbers(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCounter = 0;
    let isCombinationFound = false;

    for (let i = intervalStart; i <= intervalEnd; i++) {

        if (isCombinationFound) {
            break
        }

        for (let j = intervalStart; j <= intervalEnd; j++) {
            combinationCounter++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`);
                isCombinationFound = true;
                break;
            }
        }
    }

    if (!isCombinationFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }

}

// sumOfTwoNumbers(["1", "10", "5"]);
// sumOfTwoNumbers(["88", "888", "1000"]);
// sumOfTwoNumbers(["23", "24", "20"]);
// sumOfTwoNumbers(["88", "888", "2000"]);