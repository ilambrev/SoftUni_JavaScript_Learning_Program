function familyTrip(input) {

    let budget = Number(input[0]);
    let overnightStaysCount = Number(input[1]);
    let overnightStayPrice = Number(input[2]);
    let additionalCostsPercentage = Number(input[3]);

    if (overnightStaysCount > 7) {
        overnightStayPrice *= 0.95;
    }

    let totalExpenses = overnightStaysCount * overnightStayPrice + budget * (additionalCostsPercentage / 100);

    let balance = budget - totalExpenses;

    if (balance >= 0) {
        console.log(`Ivanovi will be left with ${balance.toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${Math.abs(balance).toFixed(2)} leva needed.`);
    }

}

// familyTrip(["800.50", "8", "100", "2"]);
// familyTrip(["500", "7", "66", "15",]);