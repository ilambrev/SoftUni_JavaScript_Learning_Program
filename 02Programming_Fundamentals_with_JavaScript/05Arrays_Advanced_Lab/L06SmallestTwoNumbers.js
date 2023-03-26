function smallestTwoNumbers(numbersArr) {

    let resultArr = numbersArr.sort((a, b) => {
        return a - b;
    }).slice(0, 2);

    console.log(resultArr.join(' '));

}

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);