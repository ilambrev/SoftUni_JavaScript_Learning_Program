function movieDay(input) {

    let timeForMovieShooting = Number(input[0]);
    let scenesNumber = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let totalTime = timeForMovieShooting * 0.15 + scenesNumber * sceneDuration;

    let timeDifference = Math.round(timeForMovieShooting - totalTime);

    if (timeDifference >= 0) {
        console.log(`You managed to finish the movie on time! You have ${timeDifference} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.abs(timeDifference)} minutes.`)
    }

}

// movieDay(["120", "10", "11"]);
// movieDay(["60", "15", "3"]);