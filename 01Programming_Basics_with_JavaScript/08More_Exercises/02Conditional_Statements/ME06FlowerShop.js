function flowerShop(magnolias, hyacinths, roses, cacti, giftPrice) {
    const moneyEarned = (magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cacti * 8) * 0.95;

    const difference = moneyEarned - giftPrice;

    if (difference >= 0) {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(Math.abs(difference))} leva.`);
    }
}

// flowerShop(2, 3, 5, 1, 50);
// flowerShop(15, 7, 5, 10, 100);