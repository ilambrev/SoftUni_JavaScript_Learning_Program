function lettersChangeNumbers(input) {

    let strings = input.split(' ').filter(string => string !== '');

    let stringsTotalValue = 0;

    for (let string of strings) {

        let stringValue = 0;
        let firstLetter = string.charAt(0);
        let secondLetter = string.charAt(string.length - 1);
        let number = Number(string.substring(1, string.length - 1));

        let letterPosition = alphabetPosition(firstLetter);

        if (checkIfLetterIsUpperCase(firstLetter)) {

            stringValue += number / letterPosition;

        } else {

            stringValue += number * letterPosition;

        }

        letterPosition = alphabetPosition(secondLetter);

        if (checkIfLetterIsUpperCase(secondLetter)) {

            stringValue -= letterPosition;

        } else {

            stringValue += letterPosition;

        }

        stringsTotalValue += stringValue;

    }

    function alphabetPosition(letter) {

        let alphabetPosition = 0;

        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {

            alphabetPosition = letter.charCodeAt(0) - 64;

        } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {

            alphabetPosition = letter.charCodeAt(0) - 96;

        }

        return alphabetPosition;

    }

    function checkIfLetterIsUpperCase(letter) {

        return letter === letter.toUpperCase();

    }

    console.log(stringsTotalValue.toFixed(2));

}

// lettersChangeNumbers('A12b s17G');
// lettersChangeNumbers('P34562Z q2576f   H456z');
// lettersChangeNumbers('a1A');