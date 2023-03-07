function binaryToDecimal(binaryNum) {

    let decimalNum = 0;

    for (let i = 0; i < binaryNum.length; i++) {

        let index = binaryNum.length - 1 - i;

        if (Number(binaryNum[index]) === 1) {
            decimalNum += Math.pow(2, i);
        }

    }

    console.log(decimalNum);

}

// binaryToDecimal('00001001');
// binaryToDecimal('11110000');