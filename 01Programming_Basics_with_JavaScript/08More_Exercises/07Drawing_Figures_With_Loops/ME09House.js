function house(n) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        if (n % 2 == 0) {
            console.log('-'.repeat((n - (i * 2)) / 2) + '*'.repeat(i * 2) + '-'.repeat((n - (i * 2)) / 2));
        } else {
            console.log('-'.repeat((n - (i * 2 - 1)) / 2) + '*'.repeat(i * 2 - 1) + '-'.repeat((n - (i * 2 - 1)) / 2));
        }
    }

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        console.log('|' + '*'.repeat(n - 2) + '|');
    }
}

// house(2);
// house(3);
// house(4);
// house(5);
// house(6);