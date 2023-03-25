function processOddNumbers(inputArr) {

    let resultArr = [];

    for (let i = inputArr.length - 1; i > 0; i--) {

        if (i % 2 !== 0) {

            let newValueOfElemet = inputArr[i] * 2;

            resultArr.push(newValueOfElemet);

        }

    }

    console.log(resultArr.join(' '));

}

// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);