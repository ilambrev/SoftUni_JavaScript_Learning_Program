function previousDay(...input) {

    let date = new Date(input.join('-'));

    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}

// previousDay(2016, 9, 30);
// previousDay(2016, 10, 1);