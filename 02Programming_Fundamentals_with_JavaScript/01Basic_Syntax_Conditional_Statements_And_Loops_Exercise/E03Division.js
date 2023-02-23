function division(number) {

    let divisor = 1;

    if (number % 10 === 0) {
        divisor = 10;
    } else if (number % 7 === 0) {
        divisor = 7;
    } else if (number % 6 === 0) {
        divisor = 6;
    } else if (number % 3 === 0) {
        divisor = 3;
    } else if (number % 2 === 0) {
        divisor = 2;
    }

    if (divisor === 1) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divisor}`);
    }

}

// division(30);
// division(15);
// division(12);
// division(1643);