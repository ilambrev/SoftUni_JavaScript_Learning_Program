function skiTrip(input) {
    let stayDays = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let overnights = stayDays - 1;

    let totalExpenses = 0;

    switch (roomType) {
        case "room for one person":
            totalExpenses = overnights * 18.00;
            break;
        case "apartment":
            totalExpenses = overnights * 25.00;
            if (overnights < 10) {
                totalExpenses -= totalExpenses * 0.30;
            } else if (overnights >= 10 && overnights <= 15) {
                totalExpenses -= totalExpenses * 0.35;
            } else {
                totalExpenses -= totalExpenses * 0.50;
            }
            break;
        case "president apartment":
            totalExpenses = overnights * 35.00;
            if (overnights < 10) {
                totalExpenses -= totalExpenses * 0.10;
            } else if (overnights >= 10 && overnights <= 15) {
                totalExpenses -= totalExpenses * 0.15;
            } else {
                totalExpenses -= totalExpenses * 0.20;
            }
            break;
    }

    if (rating === "positive") {
        totalExpenses += totalExpenses * 0.25;
    } else if (rating === "negative") {
        totalExpenses -= totalExpenses * 0.10;
    }

    console.log(totalExpenses.toFixed(2));
}

// skiTrip(["14", "apartment", "positive"]);
// skiTrip(["30", "president apartment", "negative"]);
// skiTrip(["12", "room for one person", "positive"]);
// skiTrip(["2", "apartment", "positive"]);