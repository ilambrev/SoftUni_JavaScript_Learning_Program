function vacation(groupSize, groupType, dayOfWeek) {

    let totalPrice = 0;
    let pricePerPerson = 0;
    let discount = 0;

    switch (groupType) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                pricePerPerson = 8.45;
            } else if (dayOfWeek === 'Saturday') {
                pricePerPerson = 9.80;
            } else if (dayOfWeek === 'Sunday') {
                pricePerPerson = 10.46;
            }

            if (groupSize >= 30) {
                discount = 0.15;
            }

            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                pricePerPerson = 10.90;
            } else if (dayOfWeek === 'Saturday') {
                pricePerPerson = 15.60;
            } else if (dayOfWeek === 'Sunday') {
                pricePerPerson = 16.00;
            }

            if (groupSize >= 100) {
                discount = 10 / groupSize;
            }

            break;

        case 'Regular':
            if (dayOfWeek === 'Friday') {
                pricePerPerson = 15.00;
            } else if (dayOfWeek === 'Saturday') {
                pricePerPerson = 20.00;
            } else if (dayOfWeek === 'Sunday') {
                pricePerPerson = 22.50;
            }

            if (groupSize >= 10 && groupSize <= 20) {
                discount = 0.05;
            }

            break;
    }

    totalPrice = (groupSize * pricePerPerson) * (1 - discount);

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

// vacation(30, "Students", "Sunday");
// vacation(40, "Regular", "Saturday");