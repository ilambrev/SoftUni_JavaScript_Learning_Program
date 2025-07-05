function sunglasses(n) {
    const middleРow = n % 2 == 0 ? n / 2 : (n + 1) / 2;
    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == n) {
            console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
        } else {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' +
                (i == middleРow ? '|'.repeat(n) : ' '.repeat(n)) + '*' + '/'.repeat(2 * n - 2) + '*');
        }
    }
}

// sunglasses(3);
// sunglasses(4);
// sunglasses(5);