function cinemaTickets(input) {

    let movieTitle = input[0];
    let index = 0;
    let studentTicketsSold = 0;
    let standardTicketsSold = 0;
    let kidTicketsSold = 0;

    while (movieTitle !== "Finish") {
        index++;

        let projectionTicketsSold = 0;

        let sitsNumber = Number(input[index]);

        index++;

        for (let i = 1; i <= sitsNumber; i++) {

            let ticketType = input[index];

            if (ticketType === "End") {
                break;
            }

            switch (ticketType) {
                case "student":
                    studentTicketsSold++;
                    break;
                case "standard":
                    standardTicketsSold++;
                    break;
                case "kid":
                    kidTicketsSold++;
                    break;
            }

            projectionTicketsSold++;

            if (i < sitsNumber) {
                index++;
            }

        }

        console.log(`${movieTitle} - ${((projectionTicketsSold / sitsNumber) * 100).toFixed(2)}% full.`);

        index++;
        movieTitle = input[index];

    }

    let totalTicketsSold = studentTicketsSold + standardTicketsSold + kidTicketsSold;

    console.log(`Total tickets: ${totalTicketsSold}`);
    console.log(`${((studentTicketsSold / totalTicketsSold) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicketsSold / totalTicketsSold) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicketsSold / totalTicketsSold) * 100).toFixed(2)}% kids tickets.`);

}

// cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
// cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);