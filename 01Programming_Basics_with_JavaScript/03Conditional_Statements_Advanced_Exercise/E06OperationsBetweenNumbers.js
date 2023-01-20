function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let mathOperator = input[2];

    let result = 0;
    let isResultEven = true;
    let isZeroDivisor = secondNumber === 0;
    let resultString = `Cannot divide ${firstNumber} by zero`;

    if (mathOperator === "+" || mathOperator === "-" || mathOperator === "*") {
        switch (mathOperator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
        }

        isResultEven = result % 2 === 0;

        let resultType = "even";

        if (!isResultEven) {
            resultType = "odd";
        }

        resultString = `${firstNumber} ${mathOperator} ${secondNumber} = ${result} - ${resultType}`;
    } else if (mathOperator === "/") {
        if (!isZeroDivisor) {
            result = firstNumber / secondNumber;
            resultString = `${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`;
        }
    } else if (mathOperator === "%") {
        if (!isZeroDivisor) {
            result = firstNumber % secondNumber;
            resultString = `${firstNumber} % ${secondNumber} = ${result}`;
        }
    }

    console.log(resultString);

}

// operationsBetweenNumbers(["10", "12", "+"]);
// operationsBetweenNumbers(["123", "12", "/"]);
// operationsBetweenNumbers(["112", "0", "/"]);
// operationsBetweenNumbers(["10", "1", "-"]);
// operationsBetweenNumbers(["10", "3", "%"]);
// operationsBetweenNumbers(["10", "0", "%"]);
// operationsBetweenNumbers(["7", "3", "*"]);