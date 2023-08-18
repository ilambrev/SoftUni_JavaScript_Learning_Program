function fruit(fruitName, weightInGramms, pricePerKg) {

    let weightInKg = weightInGramms / 1000;

    console.log(`I need $${(weightInKg * pricePerKg).toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`);

}

// fruit('orange', 2500, 1.80);
// fruit('apple', 1563, 2.35);