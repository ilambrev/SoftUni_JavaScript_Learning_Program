function cinemaTickets(input) {

    let movieTitle = input[0];
    let index = 0;
    let totalTicketsSold = 0;
    let totalStudentTicketsSoldNumber = 0;
    let totalStandardTicketsSoldNumber = 0;
    let totalKidsTicketsSoldNumber = 0;

    while (movieTitle !== "Finish") {

        index++;

        let availableSitsNumber = Number(input[index]);

        index++;

        let ticketType = input[index];
        let studentTicketsSoldNumber = 0;
        let standardTicketsSoldNumber = 0;
        let kidsTicketsSoldNumber = 0;
        let projectionTotalTicketsSold = 0;

        while (ticketType !== "End") {
            switch (ticketType) {
                case "student":
                    studentTicketsSoldNumber++;
                    break;
                case "standard":
                    standardTicketsSoldNumber++;
                    break;
                case "kid":
                    kidsTicketsSoldNumber++;
                    break;
            }

            projectionTotalTicketsSold++;

            if (projectionTotalTicketsSold === availableSitsNumber) {
                break;
            }

            index++;
            ticketType = input[index];
        }

        totalTicketsSold += projectionTotalTicketsSold;
        totalStudentTicketsSoldNumber += studentTicketsSoldNumber;
        totalStandardTicketsSoldNumber += standardTicketsSoldNumber;
        totalKidsTicketsSoldNumber += kidsTicketsSoldNumber;

        console.log(`${movieTitle} - ${((projectionTotalTicketsSold / availableSitsNumber) * 100).toFixed(2)}% full.`);

        index++;
        movieTitle = input[index];

    }

    console.log(`Total tickets: ${totalTicketsSold}`);
    console.log(`${((totalStudentTicketsSoldNumber / totalTicketsSold) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandardTicketsSoldNumber / totalTicketsSold) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKidsTicketsSoldNumber / totalTicketsSold) * 100).toFixed(2)}% kids tickets.`);

}

// cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
// cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);