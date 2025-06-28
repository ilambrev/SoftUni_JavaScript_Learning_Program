function multiplyBy2(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            console.log('Negative number!');
            break;
        } else {
            console.log(`Result: ${(input[i] * 2).toFixed(2)}`);
        }
    }
}

// multiplyBy2(['12', '43.2144', '12.3', '543.23', '-20']);
// multiplyBy2(['23.43', '12.3245', '0', '65.23432', '23', '65', '-12']);
// multiplyBy2(['-123']);