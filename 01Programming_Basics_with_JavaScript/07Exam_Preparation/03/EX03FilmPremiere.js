function filmPremiere(input) {

    let movieTitle = input[0];
    let foodPacket = input[1];
    let ticketsNumber = Number(input[2]);

    let ticketPrice = 0;

    switch (movieTitle) {
        case "John Wick":
            switch (foodPacket) {
                case "Drink":
                    ticketPrice = 12.00;
                    break;
                case "Popcorn":
                    ticketPrice = 15.00;
                    break;
                case "Menu":
                    ticketPrice = 19.00;
                    break;
            }
            break;
        case "Star Wars":
            switch (foodPacket) {
                case "Drink":
                    ticketPrice = 18.00;
                    break;
                case "Popcorn":
                    ticketPrice = 25.00;
                    break;
                case "Menu":
                    ticketPrice = 30.00;
                    break;
            }

            if (ticketsNumber >= 4) {
                ticketPrice *= 0.7;
            }

            break;
        case "Jumanji":
            switch (foodPacket) {
                case "Drink":
                    ticketPrice = 9.00;
                    break;
                case "Popcorn":
                    ticketPrice = 11.00;
                    break;
                case "Menu":
                    ticketPrice = 14.00;
                    break;
            }

            if (ticketsNumber === 2) {
                ticketPrice *= 0.85;
            }

            break;
    }

    let bill = ticketsNumber * ticketPrice;

    console.log(`Your bill is ${bill.toFixed(2)} leva.`);

}

// filmPremiere(["John Wick", "Drink", "6"]);
// filmPremiere(["Star Wars", "Popcorn", "4"]);
// filmPremiere(["Jumanji", "Menu", "2"]);