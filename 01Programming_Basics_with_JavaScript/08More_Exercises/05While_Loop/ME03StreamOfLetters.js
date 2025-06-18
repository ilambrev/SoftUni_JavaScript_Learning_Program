function streamOfLetters(input) {
    let counter = 0;
    let message = '';
    let c = false;
    let o = false;
    let n = false;
    let word = '';

    while (input[counter] != 'End') {
        const letter = input[counter];

        if (letter == 'c') {
            if (c) {
                word += letter;
            } else {
                c = true;
            }
        } else if (letter == 'o') {
            if (o) {
                word += letter;
            } else {
                o = true;
            }
        } else if (letter == 'n') {
            if (n) {
                word += letter;
            } else {
                n = true;
            }
        } else if (letter >= 'A' && letter <= 'Z' || letter >= 'a' && letter <= 'z') {
            word += letter;
        }

        if (c & o & n) {
            message += word + ' ';
            c = false;
            o = false;
            n = false;
            word = '';
        }

        counter++;
    }

    console.log(message);
}

// streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
// streamOfLetters(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']);
// streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);