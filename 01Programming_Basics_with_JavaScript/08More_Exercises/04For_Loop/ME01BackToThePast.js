function backToThePast(inheritedMoney, targetYear) {
    const initialYear = 1800;
    let age = 18;

    for (let i = initialYear; i <= targetYear; i++) {
        if (i % 2 == 0) {
            inheritedMoney -= 12000;
        } else {
            inheritedMoney -= 12000 + 50 * age;
        }

        age++;
    }

    if (inheritedMoney < 0) {
        console.log(`He will need ${(Math.abs(inheritedMoney)).toFixed(2)} dollars to survive.`);
    } else {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    }
}

// backToThePast(50000, 1802);
// backToThePast(100000.15, 1808)