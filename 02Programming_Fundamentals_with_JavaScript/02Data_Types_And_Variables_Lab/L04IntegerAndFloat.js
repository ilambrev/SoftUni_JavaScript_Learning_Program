function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;

    console.log(`${sum} - ${Number.isInteger(sum) ? 'Integer' : 'Float'}`);

}

// integerAndFloat(9, 100, 1.1);
// integerAndFloat(100, 200, 303);