function melrahShake(input) {

    let [string, pattern] = input;

    while (string.length > 0) {

        let firstIndex = string.indexOf(pattern);

        let lastIndex = string.lastIndexOf(pattern);

        if (firstIndex === lastIndex || pattern.length === 0) {

            console.log('No shake.');
            break;

        }

        string = string.slice(0, firstIndex) + string.slice(firstIndex + pattern.length, lastIndex) + string.slice(lastIndex + pattern.length);

        console.log('Shaked it.');

        const patternIndexToRemove = Math.floor(pattern.length / 2);
        pattern = pattern.slice(0, patternIndexToRemove) + pattern.slice(patternIndexToRemove + 1);

    }

    if (string.length === 0) {
        console.log('No shake.')
    }

    console.log(string);
}

// melrahShake(['astalavista baby', 'sta']);
// melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);