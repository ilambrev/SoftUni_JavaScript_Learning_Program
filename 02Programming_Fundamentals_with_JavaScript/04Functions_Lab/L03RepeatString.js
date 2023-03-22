function repeatString(stringToRepeat, repeatsCount) {

    let output = '';

    for (let i = 1; i <= repeatsCount; i++) {
        output += stringToRepeat;
    }

    return output;

}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));