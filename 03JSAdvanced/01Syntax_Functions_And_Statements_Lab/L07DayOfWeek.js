function dayOfWeek(day) {

    const daysOfWeek = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }

    daysOfWeek.hasOwnProperty(day) ? console.log(daysOfWeek[day]) : console.log('error');

}

// dayOfWeek('Monday');
// dayOfWeek('Friday');
// dayOfWeek('Invalid');