function triplesOfLatinLetters(numberAsString) {

    let number = Number(numberAsString);

    for (let i = 0; i < number; i++) {

        for (let j = 0; j < number; j++) {

            for (let k = 0; k < number; k++) {

                console.log(`${String.fromCharCode(97 + i)}${String.fromCharCode(97 + j)}${String.fromCharCode(97 + k)}`);

            }

        }

    }

}

// triplesOfLatinLetters('3');
// triplesOfLatinLetters('2');