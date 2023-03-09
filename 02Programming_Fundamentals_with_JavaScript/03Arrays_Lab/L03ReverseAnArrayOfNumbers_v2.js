function reverseAnArrayOfNumbers(numberOfElements, arrayOfElements) {

    let reverseArr = [];

    for (let i = numberOfElements - 1; i >= 0; i--) {

        reverseArr.push(arrayOfElements[i]);

    }

    let result = '';

    for (let i = 0; i < reverseArr.length; i++) {

        result += i < reverseArr.length - 1 ? `${reverseArr[i]} ` : `${reverseArr[i]}`;

    }

    console.log(result);

}

// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
// reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);