function triangleOfDollars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('$ '.repeat(i - 1) + '$');
    }
}

// triangleOfDollars(2);
// triangleOfDollars(3);
// triangleOfDollars(4);
// triangleOfDollars(5);