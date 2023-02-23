function ages(age) {

    let ageGroup = '';

    if (age >= 0 && age <= 2) {
        ageGroup = 'baby';
    } else if (age > 2 && age <= 13) {
        ageGroup = 'child';
    } else if (age > 13 && age <= 19) {
        ageGroup = 'teenager';
    } else if (age > 19 && age <= 65) {
        ageGroup = 'adult';
    } else if (age > 65) {
        ageGroup = 'elder';
    } else {
        ageGroup = 'out of bounds';
    }

    console.log(ageGroup);

}

// ages(20);
// ages(1);
// ages(100);
// ages(-1);