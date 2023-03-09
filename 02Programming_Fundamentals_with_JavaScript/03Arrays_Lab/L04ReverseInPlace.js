function reverseInPlace(stringsArr) {

    let result = '';

    for (let i = stringsArr.length - 1; i >= 0; i--) {

        result += i > 0 ? `${stringsArr[i]} ` : `${stringsArr[i]}`;

    }

    console.log(result);

}

// reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);