function biggestOf3Numbers(firstNum, secondNum, thirdNum) {

    let biggestNum = firstNum;

    if (secondNum > biggestNum) {
        biggestNum = secondNum;
    }

    if (thirdNum > biggestNum) {
        biggestNum = thirdNum;
    }

    console.log(biggestNum);

}

// biggestOf3Numbers(-2, 7, 3);
// biggestOf3Numbers(130, 5, 99);
// biggestOf3Numbers(43, 43.2, 43.1);
// biggestOf3Numbers(2, 2, 2);