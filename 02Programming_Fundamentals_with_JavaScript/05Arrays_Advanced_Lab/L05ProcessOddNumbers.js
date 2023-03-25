function processOddNumbers(inputArr) {

    let result = '';

    let initialElementPosition = (inputArr.length - 1) % 2 === 0 ? inputArr.length - 2 : inputArr.length - 1;

    for (let i = initialElementPosition; i >= 0; i -= 2) {

        result += i > 1 ? inputArr[i] * 2 + ' ' : inputArr[i] * 2;

    }

    console.log(result);

}

// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);