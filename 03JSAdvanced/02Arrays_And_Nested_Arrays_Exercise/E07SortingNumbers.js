function sortingNumbers(numbers) {

    numbers.sort((num1, num2) => num1 - num2);

    let initialNumbersLength = numbers.length;

    let result = [];

    for (let i = 0; i < initialNumbersLength; i++) {

        if (i % 2 === 0) {
            result.push(numbers.shift())
        } else {
            result.push(numbers.pop());
        }
    }

    return result;

}

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));