function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryMembersNumber = Number(input[2]);
    let index = 3;

    if (academyPoints <= 1250.5) {

        for (let i = 1; i <= juryMembersNumber; i++) {

            let juryMemberName = input[index];
            let juryMemberGrade = Number(input[index + 1]);
            let juryMemberPoints = juryMemberName.length * (juryMemberGrade / 2);

            academyPoints += juryMemberPoints;

            if (academyPoints > 1250.5) {

                break;

            }

            index += 2;

        }

    }

    console.log(academyPoints > 1250.5 ?
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!` :
        `Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);

}

// oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
// oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);