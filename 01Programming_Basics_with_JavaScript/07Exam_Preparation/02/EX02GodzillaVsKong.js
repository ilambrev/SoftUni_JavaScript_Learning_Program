function godzillaVsKong(input) {

    let movieBudget = Number(input[0]);
    let extrasNumber = Number(input[1]);
    let artistOutfitPrice = Number(input[2]);

    let decorPrice = movieBudget * 0.10;
    let outfitsPrice = extrasNumber * artistOutfitPrice;

    if (extrasNumber > 150) {
        outfitsPrice *= 0.90;
    }

    let totalExpenses = decorPrice + outfitsPrice;

    let balance = movieBudget - totalExpenses;

    if (balance >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${balance.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(balance).toFixed(2)} leva more.`);
    }

}

// godzillaVsKong(["20000", "120", "55.5"]);
// godzillaVsKong(["15437.62", "186", "57.99"]);
// godzillaVsKong(["9587.88", "222", "55.68"]);