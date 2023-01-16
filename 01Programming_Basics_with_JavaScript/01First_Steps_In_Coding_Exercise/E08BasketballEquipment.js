function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let sneakersPrice = annualFee - annualFee * 0.40;
    let outfitPrice = sneakersPrice - sneakersPrice * 0.20;
    let ballPrice = outfitPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.20;

    let totalAnnualExpenses = annualFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalAnnualExpenses);
}

// basketballEquipment(["365"]);
// basketballEquipment(["550"]);