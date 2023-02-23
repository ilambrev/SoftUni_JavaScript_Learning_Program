function rounding(number, precision) {

    precision = precision > 15 ? 15 : precision;

    console.log(parseFloat(number.toFixed(precision)));

}

// rounding(3.1415926535897932384626433832795, 2);
// rounding(10.5, 3);