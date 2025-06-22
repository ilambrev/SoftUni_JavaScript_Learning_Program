function schoolCamp(season, groupType, students, nights) {
    let discount = 0;
    let sport = '';
    let price = 0;

    if (students >= 10 && students < 20) {
        discount = 0.05;
    } else if (students >= 20 && students < 50) {
        discount = 0.15;
    } else if (students >= 50) {
        discount = 0.5;
    }

    if (groupType == 'boys') {
        if (season == 'Winter') {
            sport = 'Judo';
            price = 9.6;
        } else if (season == 'Spring') {
            sport = 'Tennis';
            price = 7.2;
        } else if (season == 'Summer') {
            sport = 'Football';
            price = 15;
        }
    } else if (groupType == 'girls') {
        if (season == 'Winter') {
            sport = 'Gymnastics';
            price = 9.6;
        } else if (season == 'Spring') {
            sport = 'Athletics';
            price = 7.2;
        } else if (season == 'Summer') {
            sport = 'Volleyball';
            price = 15;
        }
    } else if (groupType == 'mixed') {
        if (season == 'Winter') {
            sport = 'Ski';
            price = 10;
        } else if (season == 'Spring') {
            sport = 'Cycling';
            price = 9.5;
        } else if (season == 'Summer') {
            sport = 'Swimming';
            price = 20;
        }
    }

    console.log(`${sport} ${((students * nights * price) * (1 - discount)).toFixed(2)} lv.`);
}

// schoolCamp('Spring', 'girls', 20, 7);
// schoolCamp('Winter', 'mixed', 9, 15);
// schoolCamp('Summer', 'boys', 60, 7);
// schoolCamp('Spring', 'mixed', 17, 14);