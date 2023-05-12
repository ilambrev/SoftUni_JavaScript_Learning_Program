function treasureFinder(input) {

    let keys = input[0].split(' ').map(key => Number(key));
    let strings = input.slice(1);

    let decryptedStrings = [];

    let string = strings[0];
    let index = 0;


    while (string !== 'find') {

        let keyIndex = 0;
        let decryptedString = '';

        for (let letter of string) {

            decryptedString += String.fromCharCode(letter.charCodeAt(0) - keys[keyIndex]);

            keyIndex = keyIndex < keys.length - 1 ? keyIndex + 1 : 0;

        }

        decryptedStrings.push(decryptedString);

        index++;
        string = strings[index];

    }

    decryptedStrings.forEach(string => {

        let treasure = string.substring(string.indexOf('&') + 1, string.lastIndexOf('&'));
        let coordinates = string.substring(string.indexOf('<') + 1, string.indexOf('>'));

        console.log(`Found ${treasure} at ${coordinates}`);

    });

}

// treasureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
// treasureFinder(["1 4 2 5 3 2 1", `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`, "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC", "'stj)>34W68Z@", "find"]);