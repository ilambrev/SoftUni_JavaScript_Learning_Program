function timePlus15Minutes(input) {
    const minutesToAdd = 15;

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + minutesToAdd;

    let maxMinutes = 24 * 60;

    if (totalMinutes >= (maxMinutes)) {
        hours = 0;
        minutes = totalMinutes - maxMinutes;
    } else {
        hours = Math.floor(totalMinutes / 60);
        minutes = totalMinutes % 60;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }

}

// timePlus15Minutes(["1", "46"]);
// timePlus15Minutes(["0", "01"]);
// timePlus15Minutes(["23", "59"]);
// timePlus15Minutes(["11", "08"]);
// timePlus15Minutes(["12", "49"]);