function greatestCommonDivisorGCD(firstNum, secondNum) {

    let greatestDevisor = 1;

    for (let i = 2; i <= Math.min(firstNum, secondNum); i++) {

        if (firstNum % i === 0 && secondNum % i === 0) {
            greatestDevisor = i;
        }

    }

    console.log(greatestDevisor);

}

// greatestCommonDivisorGCD(15, 5);
// greatestCommonDivisorGCD(2154, 458);