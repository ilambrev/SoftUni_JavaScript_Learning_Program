function firstAndLastKNumbers(inputArr) {

    let k = inputArr[0];

    console.log(inputArr.slice(1, k + 1).join(' '));
    console.log(inputArr.slice(inputArr.length - k, inputArr.length).join(' '));

}

// firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);