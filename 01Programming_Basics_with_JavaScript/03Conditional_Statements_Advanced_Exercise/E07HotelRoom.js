function hotelRoom(input) {
    let month = input[0];
    let overnightStaysNumber = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = overnightStaysNumber * 50.00;
        apartmentPrice = overnightStaysNumber * 65.00;

        if (overnightStaysNumber > 7 && overnightStaysNumber <= 14) {
            studioPrice -= studioPrice * 0.05;
        } else if (overnightStaysNumber > 14) {
            studioPrice -= studioPrice * 0.30;
            apartmentPrice -= apartmentPrice * 0.10;
        }
    } else if (month === "June" || month === "September") {
        studioPrice = overnightStaysNumber * 75.20;
        apartmentPrice = overnightStaysNumber * 68.70;

        if (overnightStaysNumber > 14) {
            studioPrice -= studioPrice * 0.20;
            apartmentPrice -= apartmentPrice * 0.10;
        }
    } else if (month === "July" || month === "August") {
        studioPrice = overnightStaysNumber * 76.00;
        apartmentPrice = overnightStaysNumber * 77.00;

        if (overnightStaysNumber > 14) {
            apartmentPrice -= apartmentPrice * 0.10;
        }
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

// hotelRoom(["May", "15"]);
// hotelRoom(["June", "14"]);