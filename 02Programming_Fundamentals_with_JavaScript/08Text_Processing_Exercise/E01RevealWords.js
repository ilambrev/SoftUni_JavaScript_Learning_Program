function revealWords(wordsString, templateText) {

    let words = wordsString.split(', ').sort((w1, w2) => w2.length - w1.length);
    let text = templateText.slice();

    for (let word of words) {

        let template = '*'.repeat(word.length);

        while (text.includes(template)) {

            text = text.replace(template, word);

        }

    }

    console.log(text);

}

// revealWords('great', 'softuni is ***** place for learning new programming languages');
// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');