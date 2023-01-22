function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let savings = 0.00;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            savings += toyPrice;
        } else {
            savings += (i / 2) * 10 - 1;
        }
    }

    let finalBalance = savings - washingMachinePrice;

    if (finalBalance >= 0) {
        console.log(`Yes! ${finalBalance.toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(finalBalance).toFixed(2)}`);
    }

}

// cleverLily(["10", "170.00", "6"]);
// cleverLily(["21", "1570.98", "3"]);