function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let journeyType = "";
    let moneySpent = 0.00;

    if (budget <= 100.00) {
        destination = "Bulgaria";
        if (season === "summer") {
            journeyType = "Camp";
            moneySpent = budget * 0.30;
        } else if (season === "winter") {
            journeyType = "Hotel";
            moneySpent = budget * 0.70;
        }
    } else if (budget <= 1000.00) {
        destination = "Balkans";
        if (season === "summer") {
            journeyType = "Camp";
            moneySpent = budget * 0.40;
        } else if (season === "winter") {
            journeyType = "Hotel";
            moneySpent = budget * 0.80;
        }
    } else {
        destination = "Europe";
        journeyType = "Hotel";
        moneySpent = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyType} - ${moneySpent.toFixed(2)}`);

}

// journey(["50", "summer"]);
// journey(["75", "winter"]);
// journey(["312", "summer"]);
// journey(["678.53", "winter"]);
// journey(["1500", "summer"]);