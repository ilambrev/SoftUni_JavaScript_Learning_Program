function centuriesToMinutes(numberOfCenturies) {

    const averageDaysPerYear = 365.2422;

    let years = numberOfCenturies * 100;
    let days = Math.trunc(years * averageDaysPerYear);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${numberOfCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

// centuriesToMinutes(1);
// centuriesToMinutes(5);