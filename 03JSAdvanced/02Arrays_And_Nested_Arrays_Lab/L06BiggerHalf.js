function biggerHalf(arr) {

    return arr.sort((num1, num2) => num1 - num2).slice(arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2));

}

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));