function oscarsCeremony(input) {

    let hallRentPrice = Number(input[0]);

    let statuesPrice = hallRentPrice * 0.70;
    let cateringPrice = statuesPrice * 0.85;
    let voicing = cateringPrice / 2;

    let totalExpenses = hallRentPrice + statuesPrice + cateringPrice + voicing;

    console.log(totalExpenses.toFixed(2));

}

// oscarsCeremony(["3500"]);
// oscarsCeremony(["5555"]);