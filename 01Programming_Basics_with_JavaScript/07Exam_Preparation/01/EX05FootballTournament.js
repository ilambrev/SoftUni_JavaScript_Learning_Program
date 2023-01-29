function footballTournament(input) {

    let footballTeam = input[0];
    let machesNumber = Number(input[1]);
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let totalPoints = 0;

    for (let i = 1; i <= machesNumber + 1; i++) {

        let currentResult = input[i];

        switch (currentResult) {
            case "W":
                wins++;
                break;
            case "D":
                draws++;
                break;
            case "L":
                losses++;
                break;
        }

    }

    totalPoints = wins * 3 + draws;

    if (machesNumber === 0) {
        console.log(`${footballTeam} hasn't played any games during this season.`)
    } else if (machesNumber > 0) {
        console.log(`${footballTeam} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${losses}`);
        console.log(`Win rate: ${((wins / machesNumber) * 100).toFixed(2)}%`);
    }

}

// footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
// footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
// footballTournament(["Chelsea", "0"]);