function lunchBreak(input) {
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let lunchBreakDuration = Number(input[2]);

    let lunchDuration = lunchBreakDuration / 8;
    let restDuration = lunchBreakDuration / 4;

    let freeTime = lunchBreakDuration - (lunchDuration + restDuration);

    if (freeTime >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(freeTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration - freeTime)} more minutes.`);
    }

}

// lunchBreak(["Game of Thrones", "60", "96"]);
// lunchBreak(["Teen Wolf", "48", "60"]);