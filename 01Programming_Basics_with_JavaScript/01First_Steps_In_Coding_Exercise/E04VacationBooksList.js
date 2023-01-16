function vacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let reedingHoursPerDay = (numberOfPages / pagesPerHour) / numberOfDays;

    console.log(reedingHoursPerDay);
}

// vacationBooksList(["212", "20", "2"]);
// vacationBooksList(["432", "15", "4"]);