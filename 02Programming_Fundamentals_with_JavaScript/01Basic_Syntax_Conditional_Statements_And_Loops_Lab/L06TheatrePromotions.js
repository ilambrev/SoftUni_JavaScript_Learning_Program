function theatrePromotions(dayType, personAge) {

    let price = 0.0;
    let isAgeValid = true;

    if (personAge >= 0 && personAge <= 18) {
        switch (dayType) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 5;
                break;
        }
    } else if (personAge > 18 && personAge <= 64) {
        switch (dayType) {
            case 'Weekday':
                price = 18;
                break;
            case 'Weekend':
                price = 20;
                break;
            case 'Holiday':
                price = 12;
                break;
        }
    } else if (personAge > 64 && personAge <= 122) {
        switch (dayType) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 10;
                break;
        }
    } else {
        isAgeValid = false;
    }

    if (isAgeValid) {
        console.log(`${price}$`);
    } else {
        console.log('Error!');
    }

}

// theatrePromotions('Weekday', 42);
// theatrePromotions('Holiday', -12);
// theatrePromotions('Holiday', 15);