function rightPlace(wordWithMiisingLetter, letter, rightWord) {

    wordWithMiisingLetter = String(wordWithMiisingLetter).replace('_', letter);

    if (wordWithMiisingLetter === rightWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

// rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');