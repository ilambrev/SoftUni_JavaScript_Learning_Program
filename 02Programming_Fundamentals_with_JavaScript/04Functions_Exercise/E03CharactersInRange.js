function charactersInRange(firstChar, secondChar) {

    let result = '';
    let beginOfRange = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0)) + 1;
    let endOfRange = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    for (let i = beginOfRange; i < endOfRange; i++) {

        result += i < (endOfRange - 1) ? String.fromCharCode(i) + ' ' : String.fromCharCode(i);

    }

    console.log(result);

}

// charactersInRange('a', 'd');
// charactersInRange('#', ':');
// charactersInRange('C', '#');