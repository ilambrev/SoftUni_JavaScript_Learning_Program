function suppliesForSchool(input) {
    const pensPackPrice = 5.80;
    const markersPackPrice = 7.20;
    const detergentPricePerLiter = 1.20;

    let pensPacksNumber = Number(input[0]);
    let markersPacksNumber = Number(input[1]);
    let detergentAmountInLiters = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let totalPrice = (pensPacksNumber * pensPackPrice + markersPacksNumber * 
        markersPackPrice + detergentAmountInLiters * detergentPricePerLiter) * (1 - discount);

    console.log(totalPrice);
}

// suppliesForSchool(["2", "3", "4", "25"]);
// suppliesForSchool(["4", "2", "5", "13"]);