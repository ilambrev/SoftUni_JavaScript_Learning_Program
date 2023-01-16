function fishTank(input) {
    let tankLength = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let tankUnavailableVolume = Number(input[3]) / 100;

    let tankAvailableVolume = (tankLength * tankWidth * tankHeight) * (1 - tankUnavailableVolume);

    let waterAmount = tankAvailableVolume / 1000;

    console.log(waterAmount);
}

// fishTank(["85", "75", "47", "17"]);
// fishTank(["105 ", "77 ", "89 ", "18.5 "]);