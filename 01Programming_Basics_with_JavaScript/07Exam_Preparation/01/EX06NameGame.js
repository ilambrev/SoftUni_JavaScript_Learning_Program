function nameGame(input) {

    let playerName = input[0];
    let winerName = "";
    let winerScores = 0;
    let index = 0;

    while (playerName !== "Stop") {

        let nameLength = playerName.length;

        let scores = 0;

        for (let i = 0; i < nameLength; i++) {

            index++;

            if (playerName.charCodeAt(i) === Number(input[index])) {
                scores += 10;
            } else {
                scores += 2;
            }

        }

        if (scores >= winerScores) {
            winerName = playerName;
            winerScores = scores;
        }

        index++;
        playerName = input[index];

    }

    console.log(`The winner is ${winerName} with ${winerScores} points!`);

}

// nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
// nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);