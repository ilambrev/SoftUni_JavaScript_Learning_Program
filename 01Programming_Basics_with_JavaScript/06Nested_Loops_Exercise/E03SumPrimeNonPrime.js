function sumPrimeNonPrime(input) {

    let index = 0;
    let sumOfPrimes = 0;
    let sumOfNonPrimes = 0;

    while (input[index] !== "stop") {
        let currentNum = Number(input[index]);

        index++;

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            continue;
        }

        let divisorNumbersCount = 0;

        for (let i = 1; i <= currentNum; i++) {
            if (currentNum % i === 0) {
                divisorNumbersCount++;
            }
        }

        if (divisorNumbersCount === 2) {
            sumOfPrimes += currentNum;
        } else {
            sumOfNonPrimes += currentNum;
        }

    }

    console.log(`Sum of all prime numbers is: ${sumOfPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimes}`);

}

// sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
// sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
// sumPrimeNonPrime(["0", "-9", "0", "stop"]);