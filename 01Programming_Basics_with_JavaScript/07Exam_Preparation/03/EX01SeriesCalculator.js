function seriesCalculator(input) {
    let seriesTitle = input[0];
    let seasonsNumber = Number(input[1]);
    let episodesNumber = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let totallWatchingTime = seasonsNumber * ((episodeDuration * episodesNumber) * 1.2 + 10);

    console.log(`Total time needed to watch the ${seriesTitle} series is ${Math.floor(totallWatchingTime)} minutes.`);

}

// seriesCalculator(["Lucifer", "3", "18", "55"]);
// seriesCalculator(["Game of Thrones", "7", "10", "50"]);
// seriesCalculator(["Riverdale", "3", "21", "45"]);