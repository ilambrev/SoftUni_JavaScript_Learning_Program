function countStringOccurrences(text, wordToCount) {

    let words = text.split(' ');
    let counter = 0;

    for (let word of words) {

        if (word === wordToCount) {

            counter++;

        }

    }

    console.log(counter);

}

// countStringOccurrences('This is a word and it also is a sentence', 'is');
// countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');