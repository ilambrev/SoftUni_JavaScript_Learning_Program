function sorting(numbers) {

    let sortedNumbers = numbers.sort(function (a, b) { return b - a });
    let resultArr = [];

    for (let i = 0; i < sortedNumbers.length; i++) {

        if (i % 2 === 0) {

            resultArr.push(sortedNumbers[i / 2]);

        } else {

            resultArr.push(sortedNumbers[sortedNumbers.length - (i + 1) / 2]);

        }

    }

    console.log(resultArr.join(' '));

}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);