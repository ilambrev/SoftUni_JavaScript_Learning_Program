function bonusScoringSystem(input) {

    let studentsNumber = Number(input[0]);
    let lecturesNumber = Number(input[1]);
    let courseBonus = Number(input[2]);

    let maxTotalBonus = 0;
    let studentAttendances = 0;

    for (let i = 3; i < input.length; i++) {

        let attendances = Number(input[i]);
        let totalBonus = (attendances / lecturesNumber) * (5 + courseBonus);

        if (totalBonus > maxTotalBonus) {

            maxTotalBonus = totalBonus;
            studentAttendances = attendances;

        }

    }

    console.log(`Max Bonus: ${Math.ceil(maxTotalBonus)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);

}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);