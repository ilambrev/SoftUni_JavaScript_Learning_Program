function rightPlace(wordWithMiisingLetter, letter, rightWord) {

    wordWithMiisingLetter = wordWithMiisingLetter.replace('_', letter);

    console.log(wordWithMiisingLetter === rightWord ? 'Matched' : 'Not Matched');

}

// rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');