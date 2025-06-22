function truckDriver(seasone, distancePerMonth) {
    const tax = 0.1;
    const seasonDurationInMonths = 4;
    let salary = 0;

    if (distancePerMonth <= 5000) {
        if (seasone == 'Spring' || seasone == 'Autumn') {
            salary = (distancePerMonth * seasonDurationInMonths) * 0.75;
        } else if (seasone == 'Summer') {
            salary = (distancePerMonth * seasonDurationInMonths) * 0.9;
        } else if (seasone == 'Winter') {
            salary = (distancePerMonth * seasonDurationInMonths) * 1.05;
        }
    } else if (distancePerMonth <= 10000) {
        if (seasone == 'Spring' || seasone == 'Autumn') {
            salary = (distancePerMonth * seasonDurationInMonths) * 0.95;
        } else if (seasone == 'Summer') {
            salary = (distancePerMonth * seasonDurationInMonths) * 1.1;
        } else if (seasone == 'Winter') {
            salary = (distancePerMonth * seasonDurationInMonths) * 1.25;
        }
    } else if (distancePerMonth <= 20000) {
        salary = (distancePerMonth * seasonDurationInMonths) * 1.45;
    }

    console.log((salary * (1 - tax)).toFixed(2));
}

// truckDriver('Summer', 3455);
// truckDriver('Winter', 4350);
// truckDriver('Winter', 5678);
// truckDriver('Winter', 16042);
// truckDriver('Spring', 1600);
// truckDriver('Autumn', 8600);
// truckDriver('Spring', 16942);