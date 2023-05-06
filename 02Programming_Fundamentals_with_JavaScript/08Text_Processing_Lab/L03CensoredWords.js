function censoredWords(text, censoredWord) {

    while (text.includes(censoredWord)) {

        const censorSymbol = '*';

        text = text.replace(censoredWord, censorSymbol.repeat(censoredWord.length));

    }

    console.log(text);

}

// censoredWords('A small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');