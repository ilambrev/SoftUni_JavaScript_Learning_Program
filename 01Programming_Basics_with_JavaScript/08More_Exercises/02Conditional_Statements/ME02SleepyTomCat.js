function sleepyTomCat(holidays) {
    const daysInOneYear = 365;
    const maxPlayTimeInMinutesPerYear = 30000;
    const playTimeInMinutesPerWorkDay = 63;
    const playTimeInMinutesPerHoliday = 127;

    const playTime = (daysInOneYear - holidays) * playTimeInMinutesPerWorkDay + holidays * playTimeInMinutesPerHoliday;

    const playTimeDifference = Math.abs(playTime - maxPlayTimeInMinutesPerYear);
    const minutes = playTimeDifference % 60;
    const hours = (playTimeDifference - minutes) / 60;

    if (playTime > maxPlayTimeInMinutesPerYear) {
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

// sleepyTomCat(20);
// sleepyTomCat(113);