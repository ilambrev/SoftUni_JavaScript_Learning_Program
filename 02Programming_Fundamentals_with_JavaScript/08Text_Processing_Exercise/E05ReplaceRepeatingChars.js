function replaceRepeatingChars(input) {

    let currentChar = input[0];
    let output = currentChar;

    for (let i = 1; i < input.length; i++) {

        if (currentChar !== input[i]) {

            currentChar = input[i];
            output += currentChar;

        }

    }

    console.log(output);

}

// replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
// replaceRepeatingChars('qqqwerqwecccwd');