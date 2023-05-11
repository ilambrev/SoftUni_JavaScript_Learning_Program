function lettersChangeNumbers(input) {

    let strings = input.split(' ').filter(string => string !== '');

    let stringsTotalValue = 0;

    for (let string of strings) {

        let stringValue = 0;
        let firstLetter = string.charAt(0);
        let secondLetter = string.charAt(string.length - 1);
        let number = Number(string.substring(1, string.length - 1));
        let alphabetPosition = 0;

        if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {

            alphabetPosition = firstLetter.charCodeAt(0) - 64;

            stringValue += number / alphabetPosition;

        } else if (firstLetter.charCodeAt(0) >= 97 && firstLetter.charCodeAt(0) <= 122) {

            alphabetPosition = firstLetter.charCodeAt(0) - 96;

            stringValue += number * alphabetPosition;

        }

        if (secondLetter.charCodeAt(0) >= 65 && secondLetter.charCodeAt(0) <= 90) {

            alphabetPosition = secondLetter.charCodeAt(0) - 64;

            stringValue -= alphabetPosition;

        } else if (secondLetter.charCodeAt(0) >= 97 && secondLetter.charCodeAt(0) <= 122) {

            alphabetPosition = secondLetter.charCodeAt(0) - 96;

            stringValue += alphabetPosition;

        }

        stringsTotalValue += stringValue;

    }

    console.log(stringsTotalValue.toFixed(2));

}

// lettersChangeNumbers('A12b s17G');
// lettersChangeNumbers('P34562Z q2576f   H456z');
// lettersChangeNumbers('a1A');