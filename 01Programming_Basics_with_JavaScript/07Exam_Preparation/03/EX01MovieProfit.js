function movieProfit(input) {
    let movieTitle = input[0];
    let daysNumber = Number(input[1]);
    let ticketsNumber = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaProfit = Number(input[4]);

    let totalCinemaIncomes = (daysNumber * ticketsNumber * ticketPrice) * (1 - cinemaProfit / 100);

    console.log(`The profit from the movie ${movieTitle} is ${totalCinemaIncomes.toFixed(2)} lv.`);
}

// movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
// movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
// movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);