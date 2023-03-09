function dayOfWeek(dayNumber) {

    let weekDaysNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (dayNumber >= 1 && dayNumber <= 7) {
        console.log(weekDaysNames[dayNumber - 1]);
    } else {
        console.log('Invalid day!');
    }

}

// dayOfWeek(3);
// dayOfWeek(6);
// dayOfWeek(11);