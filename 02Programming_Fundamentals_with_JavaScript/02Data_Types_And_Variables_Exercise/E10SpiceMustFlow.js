function spiceMustFlow(startingYield) {

    const spicesForCrewPerDay = 26;

    let currentYeld = startingYield;

    let totalExtractedSpiceAmount = 0;

    let totalWorkingDays = 0;

    while (currentYeld >= 100) {

        totalWorkingDays++;
        totalExtractedSpiceAmount += currentYeld - 26;
        currentYeld -= 10;

    }

    if (totalExtractedSpiceAmount >= 26) {
        totalExtractedSpiceAmount -= 26;
    }


    console.log(totalWorkingDays);
    console.log(totalExtractedSpiceAmount);

}

// spiceMustFlow(111);
// spiceMustFlow(450);