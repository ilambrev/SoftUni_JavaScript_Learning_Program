function reverseString(string) {

    let reverseString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string.charAt(i);
    }

    console.log(reverseString);

}

// reverseString('Hello');
// reverseString('SoftUni');
// reverseString('1234');