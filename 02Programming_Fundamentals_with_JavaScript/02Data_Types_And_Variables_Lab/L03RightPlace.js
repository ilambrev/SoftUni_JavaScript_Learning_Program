function rightPlace(wordWithMiisingLetter, letter, rightWord) {

    let wordWithInsertedLetter = '';

    for (let i = 0; i < wordWithMiisingLetter.length; i++) {
        let currenLetter = wordWithMiisingLetter.charAt(i);

        if (currenLetter === '_') {
            wordWithInsertedLetter += letter;
        } else {
            wordWithInsertedLetter += currenLetter;
        }

    }

    if (wordWithInsertedLetter === rightWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

// rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');