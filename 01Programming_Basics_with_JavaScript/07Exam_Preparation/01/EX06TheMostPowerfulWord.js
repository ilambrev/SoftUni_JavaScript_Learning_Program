function theMostPowerfulWord(input) {

    let word = input[0];
    index = 0;
    let mostPowerfullWord = "";
    let powerOfMostPowerfullWord = 0;

    while (word !== "End of words") {

        let wordLength = word.length;
        let wordPower = 0;

        for (let i = 0; i < wordLength; i++) {
            wordPower += word.charCodeAt(i);
        }

        let firstCharOfWord = word.charAt(0).toLowerCase();

        if (word.charAt(0).toLowerCase() === 'a' || firstCharOfWord === 'e' || word.charAt(0).toLowerCase() === 'i' ||
            word.charAt(0).toLowerCase() === 'o' || word.charAt(0).toLowerCase() === 'u' || word.charAt(0).toLowerCase() === 'y') {
            wordPower *= wordLength;
        } else {
            wordPower = Math.floor(wordPower / wordLength);
        }

        if (wordPower > powerOfMostPowerfullWord) {
            mostPowerfullWord = word;
            powerOfMostPowerfullWord = wordPower;
        }

        index++;
        word = input[index];

    }

    console.log(`The most powerful word is ${mostPowerfullWord} - ${powerOfMostPowerfullWord}`);

}

// theMostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
// theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);