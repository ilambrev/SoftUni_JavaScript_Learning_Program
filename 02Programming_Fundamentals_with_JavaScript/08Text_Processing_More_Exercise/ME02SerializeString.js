function serializeString(input) {

    let serializedChars = new Map();
    let charArr = input[0].split('');

    for (let i = 0; i < charArr.length; i++) {

        let currentChar = charArr[i];

        if (!serializedChars.has(currentChar)) {

            let arr = [];

            serializedChars.set(currentChar, arr);

        }

        serializedChars.get(currentChar).push(i);

    }

    Array.from(serializedChars.entries())
        .forEach(([char, indexes]) => console.log(`${char}:${indexes.join('/')}`));

}

// serializeString(["abababa"]);
// serializeString(["avjavamsdmcalsdm"]);