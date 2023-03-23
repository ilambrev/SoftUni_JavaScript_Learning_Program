function numberModification(number) {

    let numberAsString = number + '';

    let averageValueOfDigits = function (number) {

        let sumOfDigits = 0;

        for (let i = 0; i < number.length; i++) {

            sumOfDigits += Number(number.charAt(i));

        }

        return sumOfDigits / number.length;

    }

    let averageOfDigits = averageValueOfDigits(numberAsString);

    while (averageOfDigits < 5) {

        numberAsString += 9;

        averageOfDigits = averageValueOfDigits(numberAsString);

    }

    console.log(numberAsString);

}

// numberModification(101);
// numberModification(5835);