function asciiSumator(input) {

    let firstCode = input[0].charCodeAt(0);
    let secondCode = input[1].charCodeAt(0);
    let string = input[2];

    let sumOfCodes = 0;
    let beginCode = Math.min(firstCode, secondCode);
    let endCode = Math.max(firstCode, secondCode);

    for (let letter of string) {

        if (letter.charCodeAt(0) > beginCode && letter.charCodeAt(0) < endCode) {

            sumOfCodes += letter.charCodeAt(0);

        }

    }

    console.log(sumOfCodes);

}

// asciiSumator(['.', '@', 'dsg12gr5653feee5']);
// asciiSumator(['?', 'E', '@ABCEF']);
// asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);