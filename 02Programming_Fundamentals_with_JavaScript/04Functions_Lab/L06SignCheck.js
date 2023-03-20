function signCheck(numOne, numTwo, numThree) {

    function resultSign(numOne, numThree, numThree) {

        let negativeNumberCounter = 0;

        if (numOne < 0) {
            negativeNumberCounter++;
        }

        if (numTwo < 0) {
            negativeNumberCounter++;
        }

        if (numThree < 0) {
            negativeNumberCounter++;
        }

        if (negativeNumberCounter % 2 === 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }

    }

    console.log(resultSign(numOne, numTwo, numThree));

}

// signCheck(5, 12, -15);
// signCheck(-6, -12, 14);
// signCheck(-1, -2, -3);
// signCheck(-5, 1, 1);