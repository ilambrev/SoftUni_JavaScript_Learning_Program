function lettersCombinations(startLetter, endLetter, letterToSkip) {
    const startLetterCode = startLetter.charCodeAt(0);
    const endLetterCode = endLetter.charCodeAt(0);
    const letterToSkipCode = letterToSkip.charCodeAt(0);
    let result = '';
    let counter = 0;

    for (let i = startLetterCode; i <= endLetterCode; i++) {
        if (i == letterToSkipCode) {
            continue;
        }
        for (let j = startLetterCode; j <= endLetterCode; j++) {
            if (j == letterToSkipCode) {
                continue;
            }
            for (let k = startLetterCode; k <= endLetterCode; k++) {
                if (k == letterToSkipCode) {
                    continue;
                }
                result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + ' ';
                counter++;
            }
        }
    }

    console.log(result + counter);
}

// lettersCombinations('a', 'c', 'b');
// lettersCombinations('f', 'k', 'h');
// lettersCombinations('a', 'c', 'z');