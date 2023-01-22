function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryMembersNumber = Number(input[2]);

    let actorScore = academyPoints;

    for (let i = 1; i <= juryMembersNumber; i++) {
        if (actorScore > 1250.5) {
            isScoreForNominationHitted = true;
            break;
        }

        juryMemeberName = input[i * 2 + 1];
        juriMemeberPoints = Number(input[i * 2 + 2]);

        actorScore += (juryMemeberName.length * juriMemeberPoints) / 2;

    }

    if (actorScore > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorScore.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - actorScore).toFixed(1)} more!`);
    }

}

// oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
// oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);