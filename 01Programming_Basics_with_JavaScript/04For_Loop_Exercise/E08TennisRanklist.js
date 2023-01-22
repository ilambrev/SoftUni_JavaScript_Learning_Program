function tennisRanklist(input) {

    let tournamentsNumber = Number(input[0]);
    let startingPoints = Number(input[1]);

    let totalPoints = startingPoints;
    let wins = 0;

    for (let i = 1; i <= tournamentsNumber; i++) {
        let positionInTournament = input[i + 1];

        switch (positionInTournament) {
            case "W":
                totalPoints += 2000;
                wins++;
                break;
            case "F":
                totalPoints += 1200;
                break;
            case "SF":
                totalPoints += 720;
                break;
        }
    }

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints - startingPoints) / tournamentsNumber)}`);
    console.log(`${((wins / tournamentsNumber) * 100).toFixed(2)}%`);

}

// tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
// tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);