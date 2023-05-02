function wordOccurrences(input) {

    let words = new Map();

    for (let word of input) {

        words.has(word) ? words.set(word, words.get(word) + 1) : words.set(word, 1);

    }

    let sortedWords = Array.from(words.entries()).sort(([word1, count1], [word2, count2]) => count2 - count1);

    for (let [word, count] of sortedWords) {

        console.log(`${word} -> ${count} times`);

    }

}

// wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
// wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);