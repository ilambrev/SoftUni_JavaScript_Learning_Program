function weatherForecastPart2(temperature) {
    let weather = '';

    if (temperature >= 5 && temperature <= 11.9) {
        weather = 'Cold';
    } else if (temperature >= 12 && temperature <= 14.9) {
        weather = 'Cool';
    } else if (temperature >= 15 && temperature <= 20) {
        weather = 'Mild';
    } else if (temperature >= 20.1 && temperature <= 25.9) {
        weather = 'Warm';
    } else if (temperature >= 26 && temperature <= 35) {
        weather = 'Hot';
    } else {
        weather = 'unknown';
    }

    console.log(weather);
}

// weatherForecastPart2(16.5);
// weatherForecastPart2(8);
// weatherForecastPart2(22.4);
// weatherForecastPart2(26);
// weatherForecastPart2(0);