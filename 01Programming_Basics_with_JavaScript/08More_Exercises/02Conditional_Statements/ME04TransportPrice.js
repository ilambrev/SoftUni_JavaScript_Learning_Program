function transportPrice(distanceInKm, period) {
    let pricePerKm = 0;

    if (distanceInKm >= 100) {
        pricePerKm = 0.06;
    } else if (distanceInKm >= 20) {
        pricePerKm = 0.09;
    } else {
        pricePerKm = period == 'day' ? 0.79 : 0.90;
    }

    console.log(((distanceInKm < 20 ? 0.70 : 0) + distanceInKm * pricePerKm).toFixed(2));
}

// transportPrice(5, 'day');
// transportPrice(7, 'night');
// transportPrice(25, 'day');
// transportPrice(180, 'night');