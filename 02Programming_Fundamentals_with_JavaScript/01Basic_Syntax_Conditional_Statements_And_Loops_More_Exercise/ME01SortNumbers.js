function sortNumbers(firstNum, secondNum, thirdNum) {

    let buffer = firstNum;

    if (secondNum > firstNum) {
        firstNum = secondNum;
        secondNum = buffer;
    }

    if (thirdNum > secondNum) {
        buffer = secondNum;
        secondNum = thirdNum;
        thirdNum = buffer
    }

    if (secondNum > firstNum) {
        buffer = firstNum;
        firstNum = secondNum;
        secondNum = buffer
    }

    console.log(firstNum);
    console.log(secondNum);
    console.log(thirdNum);

}

// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);