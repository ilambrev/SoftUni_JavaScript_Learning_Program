function flowers(chrysanthemums, roses, tulips, season, isHoliday) {
    const arrangementPrice = 2;
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (season == 'Spring' || season == 'Summer') {
        chrysanthemumsPrice = 2;
        rosesPrice = 4.1;
        tulipsPrice = 2.5;
    } else {
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.5;
        tulipsPrice = 4.15;
    }

    if (isHoliday == 'Y') {
        chrysanthemumsPrice *= 1.15;
        rosesPrice *= 1.15;
        tulipsPrice *= 1.15;
    }

    let bouquetPrice = chrysanthemums * chrysanthemumsPrice + roses * rosesPrice + tulips * tulipsPrice;

    if (tulips > 7 && season == 'Spring') {
        bouquetPrice *= 0.95;
    }

    if (roses >= 10 && season == 'Winter') {
        bouquetPrice *= 0.9;
    }

    if (chrysanthemums + roses + tulips > 20) {
        bouquetPrice *= 0.8;
    }

    bouquetPrice += arrangementPrice;

    console.log(bouquetPrice.toFixed(2));
}

// flowers(2, 4, 8, 'Spring', 'Y');
// flowers(3, 10, 9, 'Winter', 'N');
// flowers(10, 10, 10, 'Autumn', 'N');