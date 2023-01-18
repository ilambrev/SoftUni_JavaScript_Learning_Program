function sumSeconds(input) {
    let firstRacerTime = Number(input[0]);
    let secondRacerTime = Number(input[1]);
    let thirdRacerTime = Number(input[2]);

    let totalTimeInSeconds = firstRacerTime + secondRacerTime + thirdRacerTime;

    let minutes = Math.trunc(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
    
}

// sumSeconds(["35", "45", "44"]);
// sumSeconds(["22", "7", "34"]);
// sumSeconds(["50", "50", "49"]);
// sumSeconds(["14", "12", "10"]);