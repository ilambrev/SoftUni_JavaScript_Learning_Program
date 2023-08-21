function smallestTwoNumbers(arr) {

    console.log(arr.sort((num1, num2) => num1 - num2).slice(0, 2).join(' '));

}

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);