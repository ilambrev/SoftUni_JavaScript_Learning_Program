function mathOperations(firstNum, secondNum, operator) {

    let operations = {
        '+': () => firstNum + secondNum,
        '-': () => firstNum - secondNum,
        '*': () => firstNum * secondNum,
        '/': () => firstNum / secondNum,
        '%': () => firstNum % secondNum,
        '**': () => firstNum ** secondNum,
    }

    console.log(operations[operator]());

}

// mathOperations(5, 6, '+');
// mathOperations(3, 5.5, '*');