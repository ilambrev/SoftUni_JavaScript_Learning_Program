function oddOccurrences(input) {

    let wordsCount = new Map();
    let words = input.toLowerCase().split(' ');

    for (let word of words) {

        if (!wordsCount.has(word)) {
            wordsCount.set(word, 0);
        }

        wordsCount.set(word, wordsCount.get(word) + 1);

    }

    console.log(Array.from(wordsCount.entries())
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word]) => word)
        .join(' '));

}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');