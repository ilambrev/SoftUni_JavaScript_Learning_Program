function movieDestination(input) {

    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysNumber = Number(input[3]);

    let pricePerDay = 0;

    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                pricePerDay = 45000.00;
            } else if (season === "Summer") {
                pricePerDay = 40000.00;
            }

            pricePerDay *= 0.7;

            break;
        case "Sofia":
            if (season === "Winter") {
                pricePerDay = 17000.00;
            } else if (season === "Summer") {
                pricePerDay = 12500.00;
            }

            pricePerDay *= 1.25;

            break;
        case "London":
            if (season === "Winter") {
                pricePerDay = 24000.00;
            } else if (season === "Summer") {
                pricePerDay = 20250.00;
            }

            break;
    }

    let totalExpenses = daysNumber * pricePerDay;

    let balance = movieBudget - totalExpenses;

    if (balance >= 0) {
        console.log(`The budget for the movie is enough! We have ${balance.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${Math.abs(balance).toFixed(2)} leva more!`);
    }

}

// movieDestination(["400000", "Sofia", "Winter", "20"]);
// movieDestination(["1000000", "Dubai", "Summer", "5"]);
// movieDestination(["200000", "London", "Summer", "7"]);