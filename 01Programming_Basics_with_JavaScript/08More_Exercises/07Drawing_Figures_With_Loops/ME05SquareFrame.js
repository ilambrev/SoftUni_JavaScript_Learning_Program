function squareFrame(n) {
    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == n) {
            console.log('+ ' + '- '.repeat(n - 2) + '+');
        } else {
            console.log('| ' + '- '.repeat(n - 2) + '|');
        }
    }
}

// squareFrame(3);
// squareFrame(4);
// squareFrame(5);
// squareFrame(6);