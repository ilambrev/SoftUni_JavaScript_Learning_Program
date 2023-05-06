function censoredWords(text, censoredWord) {

    let censor = (word => {
        return '*'.repeat(word.length);
    });

    let censoredText = text.replace(censoredWord, censor(censoredWord));

    while (censoredText.includes(censoredWord)) {


        censoredText = censoredText.replace(censoredWord, censor(censoredWord));

    }

    console.log(censoredText);

}

// censoredWords('A small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');