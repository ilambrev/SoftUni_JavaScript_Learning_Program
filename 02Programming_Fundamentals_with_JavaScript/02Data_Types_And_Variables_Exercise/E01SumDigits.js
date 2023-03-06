function sumDigits(number) {

    let numberAsString = number.toString();

    let sumOfDigits = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        sumOfDigits += Number(numberAsString[i]);

    }

    console.log(sumOfDigits);

}

// sumDigits(245678);
// sumDigits(97561);
// sumDigits(543);