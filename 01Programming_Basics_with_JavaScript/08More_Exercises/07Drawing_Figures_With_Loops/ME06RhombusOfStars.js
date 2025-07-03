function rhombusOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '* '.repeat(i - 1) + '*');
    }

    for (let i = 1; i <= n - 1; i++) {
        console.log(' '.repeat(i) + '* '.repeat(n - 1 - i) + '*');
    }
}

// rhombusOfStars(1);
// rhombusOfStars(2);
// rhombusOfStars(3);
// rhombusOfStars(4);