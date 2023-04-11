function blackFlag(input) {

    let daysInPirating = Number(input[0]);
    let plunderPerDay = Number(input[1]);
    let expectedTotalPlunder = Number(input[2]);
    let gainedPlunder = 0;

    for (let i = 1; i <= daysInPirating; i++) {

        gainedPlunder += plunderPerDay;

        if (i % 3 === 0) {

            gainedPlunder += plunderPerDay * 0.5;

        }

        if (i % 5 === 0) {

            gainedPlunder -= gainedPlunder * 0.3;

        }

    }

    if (gainedPlunder >= expectedTotalPlunder) {

        console.log(`Ahoy! ${gainedPlunder.toFixed(2)} plunder gained.`)

    } else {

        let percentageOfPlunder = (gainedPlunder / expectedTotalPlunder) * 100;

        console.log(`Collected only ${percentageOfPlunder.toFixed(2)}% of the plunder.`);

    }

}

// blackFlag(["5", "40", "100"]);
// blackFlag(["10", "20", "380"])