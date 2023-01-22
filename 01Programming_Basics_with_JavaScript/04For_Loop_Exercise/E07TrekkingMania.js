function trekkingMania(input) {

    let groupsNumber = Number(input[0]);

    let climbersToMusala = 0;
    let climbersToMontBlanc = 0;
    let climbersToKilimanjaro = 0;
    let climbersToK2 = 0;
    let climbersToEverest = 0;

    let totalClimbers = 0;

    for (let i = 1; i <= groupsNumber; i++) {

        let groupMemebersCount = Number(input[i]);
        totalClimbers += groupMemebersCount;

        if (groupMemebersCount <= 5) {
            climbersToMusala += groupMemebersCount;
        } else if (groupMemebersCount >= 6 && groupMemebersCount <= 12) {
            climbersToMontBlanc += groupMemebersCount;
        } else if (groupMemebersCount >= 13 && groupMemebersCount <= 25) {
            climbersToKilimanjaro += groupMemebersCount;
        } else if (groupMemebersCount >= 26 && groupMemebersCount <= 40) {
            climbersToK2 += groupMemebersCount;
        } else {
            climbersToEverest += groupMemebersCount;
        }
    }

    console.log(`${((climbersToMusala / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersToMontBlanc / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersToKilimanjaro / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersToK2 / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersToEverest / totalClimbers) * 100).toFixed(2)}%`);

}

// trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
// trekkingMania(["5", "25", "41", "31", "250", "6"]);