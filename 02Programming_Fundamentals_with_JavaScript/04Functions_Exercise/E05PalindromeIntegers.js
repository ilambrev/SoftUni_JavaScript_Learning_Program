function palindromeIntegers(numbers) {


    function reverseNumber(number) {

        let reversedNumber = '';

        for (let i = (number + '').length - 1; i >= 0; i--) {

            reversedNumber += (number + '').charAt(i);

        }

        return Number(reversedNumber);

    }

    for (let number of numbers) {

        console.log(number === reverseNumber(number));

    }

}

// palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32, 2, 232, 1010]);