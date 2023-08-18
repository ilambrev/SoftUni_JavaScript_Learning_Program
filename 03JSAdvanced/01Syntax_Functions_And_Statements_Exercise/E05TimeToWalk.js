function timeToWalk(steps, footprintInMeters, speedInKmPerHour) {

    let speedInMetersPerSecond = (speedInKmPerHour * 1000) / 3600;

    let distanceInMeters = steps * footprintInMeters;

    let timeInSeconds = distanceInMeters / speedInMetersPerSecond + 60 * Math.floor(distanceInMeters / 500);

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds = Math.round(timeInSeconds - (hours * 3600) - minutes * 60);

    let putLeadingZero = (num) => num < 10 ? '0' + num : num;

    console.log(`${putLeadingZero(hours)}:${putLeadingZero(minutes)}:${putLeadingZero(seconds)}`);

}

// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);