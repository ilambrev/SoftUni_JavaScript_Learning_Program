function oscarsWeekInCinema(input) {

    let movieTitle = input[0];
    let hallType = input[1];
    let ticketsBoughtNumber = Number(input[2]);

    let ticketPrice = 0;

    switch (movieTitle) {
        case "A Star Is Born":
            if (hallType === "normal") {
                ticketPrice = 7.50;
            } else if (hallType === "luxury") {
                ticketPrice = 10.50;
            } else if (hallType === "ultra luxury") {
                ticketPrice = 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (hallType === "normal") {
                ticketPrice = 7.35;
            } else if (hallType === "luxury") {
                ticketPrice = 9.45;
            } else if (hallType === "ultra luxury") {
                ticketPrice = 12.75;
            }
            break;
        case "Green Book":
            if (hallType === "normal") {
                ticketPrice = 8.15;
            } else if (hallType === "luxury") {
                ticketPrice = 10.25;
            } else if (hallType === "ultra luxury") {
                ticketPrice = 13.25;
            }
            break;
        case "The Favourite":
            if (hallType === "normal") {
                ticketPrice = 8.75;
            } else if (hallType === "luxury") {
                ticketPrice = 11.55;
            } else if (hallType === "ultra luxury") {
                ticketPrice = 13.95;
            }
            break;
    }

    let movieIncomes = ticketsBoughtNumber * ticketPrice;

    console.log(`${movieTitle} -> ${movieIncomes.toFixed(2)} lv.`);

}

// oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
// oscarsWeekInCinema(["Green Book", "normal", "63"]);
// oscarsWeekInCinema(["The Favourite", "ultra luxury", "34"]);