function bombNumbers(numbersSequence, bombNumberAndPower) {

    let bombNumber = bombNumberAndPower[0];
    let bombPower = bombNumberAndPower[1];
    let resultSequence = numbersSequence.slice();
    let sumOfResultSequenceElements = 0;

    while (resultSequence.includes(bombNumber)) {

        for (let i = 0; i < resultSequence.length; i++) {

            if (resultSequence[i] === bombNumber) {

                let startIndex = Math.max(i - bombPower, 0);
                let endIndex = Math.min(i + bombPower, resultSequence.length - 1);

                resultSequence.splice(startIndex, endIndex - startIndex + 1);

                break;

            }

        }

    }

    for (let element of resultSequence) {

        sumOfResultSequenceElements += element;

    }

    console.log(sumOfResultSequenceElements);

}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);