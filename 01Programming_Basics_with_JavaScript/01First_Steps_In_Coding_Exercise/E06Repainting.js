function repainting(input) {
    const nylonPricePerSquareMeter = 1.50;
    const paintPricePerLiter = 14.50;
    const paintTinnerPricePerLiter = 5.00;
    const bagsTotalPrice = 0.40;

    let nylonAmount = Number(input[0]);
    let paintAmount = Number(input[1]);
    let paintTinnerAmount = Number(input[2]);
    let workHours = Number(input[3]);

    let totalMaterialsPrice = (nylonAmount + 2) * nylonPricePerSquareMeter +
        (paintAmount * 1.1) * paintPricePerLiter +
        paintTinnerAmount * paintTinnerPricePerLiter +
        bagsTotalPrice;
    
    let laborExpenses = (totalMaterialsPrice * 0.3) * workHours;

    let totalExpenses = totalMaterialsPrice + laborExpenses;

    console.log(totalExpenses);
}

// repainting(["10", "11", "4", "8"]);
// repainting(["5", "10", "10", "1"]);