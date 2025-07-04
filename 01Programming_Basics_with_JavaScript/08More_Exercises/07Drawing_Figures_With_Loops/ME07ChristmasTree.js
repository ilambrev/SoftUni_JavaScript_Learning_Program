function christmassTree(n) {
    for (let i = 0; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(i) + ' |' + (i > 0 ? ' ' : '') + '*'.repeat(i));
    }
}

// christmassTree(1);
// christmassTree(2);
// christmassTree(3);
// christmassTree(4);