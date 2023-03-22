function factorialDivision(firstNum, secondNum) {

    let calculateFactorial = function (number) {

        let factorial = number;

        for (let i = number - 1; i > 1; i--) {

            factorial *= i;

        }

        return factorial;

    }

    console.log((calculateFactorial(firstNum) / calculateFactorial(secondNum)).toFixed(2));

}

// factorialDivision(5, 2);
// factorialDivision(6, 2);