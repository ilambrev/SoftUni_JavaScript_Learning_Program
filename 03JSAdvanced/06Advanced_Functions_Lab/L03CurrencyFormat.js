function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// Submit only the createFormatter function in SoftUni Judge testing system to get 100/100 points
function createFormatter(separator, symbol, symbolFirst, formatter) {
    return formatter.bind(this, separator, symbol, symbolFirst);
}

// let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
// console.log(dollarFormatter(5345));
// console.log(dollarFormatter(3.1429));
// console.log(dollarFormatter(2.709));