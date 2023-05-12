function valueOfAString(input) {

    let [string, lettersCase] = input;
    let firstCode = 0;
    let lastCode = 0;
    let value = 0;

    switch (lettersCase) {
        case 'LOWERCASE':

            firstCode = 97;
            lastCode = 122;

            break;
        case 'UPPERCASE':

            firstCode = 65;
            lastCode = 90;

            break;
    }

    value = string.split('')
        .filter(letter => letter.charCodeAt(0) >= firstCode && letter.charCodeAt(0) <= lastCode)
        .map(letter => letter.charCodeAt(0))
        .reduce((code1, code2) => code1 + code2);

    console.log(`The total sum is: ${value}`);

}

// valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
// valueOfAString(['AC/DC', 'UPPERCASE']);