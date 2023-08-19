function roadRadar(speed, area) {

    const areasSpeedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }


    if (areasSpeedLimits[area] < speed) {

        let overSpeed = speed - areasSpeedLimits[area];

        let status = 'reckless driving';

        if (overSpeed <= 20) {
            status = 'speeding';
        } else if (overSpeed <= 40) {
            status = 'excessive speeding';
        }

        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${areasSpeedLimits[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${areasSpeedLimits[area]} zone`);
    }

}

// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');