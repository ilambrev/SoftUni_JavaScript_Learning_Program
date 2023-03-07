function primeNumberChecker(number) {

    let isNumberPrime = false;

    if (number > 1) {

        let counter = 0;

        for (let i = 2; i <= number; i++) {

            if (number % i === 0) {
                counter++;
            }

        }

        isNumberPrime = counter === 1;

    }

    console.log(isNumberPrime);

}

// primeNumberChecker(7);
// primeNumberChecker(8);
// primeNumberChecker(81);