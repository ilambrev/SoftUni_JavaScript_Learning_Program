function repeatString(stringToRepeat, repeatsCount) {

    let output = '';

    for (let i = 1; i <= repeatsCount; i++) {
        output += stringToRepeat;
    }

    console.log(output);

}

// repeatString("abc", 3);
// repeatString("String", 2);