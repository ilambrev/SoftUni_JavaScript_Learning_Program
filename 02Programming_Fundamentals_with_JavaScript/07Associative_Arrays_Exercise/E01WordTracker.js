function wordTracker(input) {

    let wordsToFind = input[0].split(' ');
    let words = input.splice(1);
    let occurrences = {};

    for (let wordToFind of wordsToFind) {

        if (!occurrences.hasOwnProperty(wordToFind)) {

            occurrences[wordToFind] = 0;

        }

        for (let word of words) {

            if (wordToFind === word) {

                occurrences[wordToFind]++;

            }

        }

    }

    let sortedOccurrences = Object.entries(occurrences).sort(([word1, count1], [word2, count2]) => count2 - count1);
    occurrences = Object.fromEntries(sortedOccurrences);

    for (let [word, count] of Object.entries(occurrences)) {

        console.log(`${word} - ${count}`);

    }

}

// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);
// wordTracker([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
// ]);