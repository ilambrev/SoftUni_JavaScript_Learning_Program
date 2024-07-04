function postOffice(input) {
    const capitalLetterRegexp = /([#$%*&])([A-Z]+)\1/g;
    const wordsParamsRegexp = /[0-9]{2}:[0-9]{2}/g;

    let [firstPart, secondPart, thirdPart] = input[0].split('|');

    const thirdPartWords = thirdPart.split(/\s+/);

    const capitalLetters = [...firstPart.matchAll(capitalLetterRegexp)][0][2];
    const wordsParamsPairs = secondPart.match(wordsParamsRegexp);

    const wordsParams = {};

    wordsParamsPairs.forEach(wp => {
        let [code, symbols] = wp.split(':');
        code = Number(code);
        symbols = Number(symbols);

        if (!wordsParams.hasOwnProperty(code)) {
            wordsParams[code] = symbols;
        }
    });

    const words = capitalLetters.split('').reduce((acc, curr) => {
        const letterCode = curr.charCodeAt(0);

        if (wordsParams.hasOwnProperty(letterCode)) {
            const wordRegexp = new RegExp(`^${curr}[^ ]{${wordsParams[letterCode]}}$`);

            const word = thirdPartWords.find(w => wordRegexp.test(w));

            acc.push(word);
        }

        return acc;
    }, []);

    console.log(words.join('\n'));
}

// postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
// postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);