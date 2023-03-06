function lowerOrUpper(character) {

    let charASCIValue = character.charCodeAt(0);

    if (charASCIValue >= 65 && charASCIValue <= 90) {

        console.log('upper-case');

    } else if (charASCIValue >= 97 && charASCIValue <= 122) {

        console.log('lower-case');

    }

}

// lowerOrUpper('L');
// lowerOrUpper('f');