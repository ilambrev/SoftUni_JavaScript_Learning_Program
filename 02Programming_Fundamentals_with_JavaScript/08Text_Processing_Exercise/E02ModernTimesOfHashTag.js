function modernTimesOfHashTag(inputString) {

    let parts = inputString.split(' ');

    for (let part of parts) {

        if (part[0] === '#' && part.length > 1) {

            let word = part.substring(1);

            if (isWordValid(word)) {

                console.log(word);


            }

        }

    }

    function isWordValid(word) {

        word = word.toLowerCase();

        for (let i = 0; i < word.length; i++) {

            if (word.charCodeAt(i) > 122 || word.charCodeAt(i) < 97) {

                return false;

            }

        }

        return true;

    }

}

// modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
// modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');