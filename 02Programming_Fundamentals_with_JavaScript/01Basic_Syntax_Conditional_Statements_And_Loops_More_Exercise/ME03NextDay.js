function nextDay(year, month, day) {

    let date = new Date();
    date.setYear(year);
    date.setMonth(month - 1);
    date.setDate(day);

    date.setDate(date.getDate() + 1);

    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

}

// nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);