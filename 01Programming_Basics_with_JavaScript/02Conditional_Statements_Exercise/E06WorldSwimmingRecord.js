function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForMeterInSeconds = Number(input[2]);

    let delayInSeconds = Math.floor(distanceInMeters / 15) * 12.5;

    let swimmerTime = distanceInMeters * timeForMeterInSeconds + delayInSeconds;

    if (swimmerTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${swimmerTime.toFixed(2)} seconds.`);
    } else {
        let overTime = swimmerTime - recordInSeconds;
        console.log(`No, he failed! He was ${overTime.toFixed(2)} seconds slower.`);
    }
}

// worldSwimmingRecord(["10464", "1500", "20"]);
// worldSwimmingRecord(["55555.67", "3017", "5.03"]);