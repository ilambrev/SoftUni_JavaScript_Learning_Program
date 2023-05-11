function passwordGenerator(input) {

    let vovels = new Set(['a', 'e', 'i', 'o', 'u']);

    let [firstString, secondString, word] = input;

    let counter = 0;

    let lastIndexOfWordLetters = word.length - 1;

    let passwordArr = (firstString + secondString).toLowerCase().split('');

    word = word.toUpperCase();

    for (let i = 0; i < passwordArr.length; i++) {

        let currentLetter = passwordArr[i];

        if (vovels.has(currentLetter)) {

            passwordArr[i] = word.charAt(counter);

            counter = counter < lastIndexOfWordLetters ? counter + 1 : 0;

        }

    }

    let password = passwordArr.reverse().join('');

    console.log(`Your generated password is ${password}`);

}

// passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
// passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
// passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);