function sameNumbers(num) {

    num = num.toString();

    let isDigitsSame = (num) => {

        let firstDigit = num[0];

        for (let i = 1; i < num.length; i++) {
            if (num[i] !== firstDigit) {
                return false;
            }
        }

        return true;
    };

    let sumOfDigits = (num) => num.split('').map(d => Number(d)).reduce((acc, curr) => acc += curr, 0);

    console.log(`${isDigitsSame(num)}\n${sumOfDigits(num)}`);

}

// sameNumbers(2222222);
// sameNumbers(1234);