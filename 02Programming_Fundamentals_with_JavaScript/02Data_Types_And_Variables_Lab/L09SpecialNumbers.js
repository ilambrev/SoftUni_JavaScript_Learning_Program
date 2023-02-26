function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {

        let sumOfDigits = 0;

        for (let j = 0; j < i.toString().length; j++) {
            sumOfDigits += Number(i.toString()[j]);
        }

        console.log(`${i} -> ${sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11 ? 'True' : 'False'}`);
    }

}

// specialNumbers(15);
// specialNumbers(20);