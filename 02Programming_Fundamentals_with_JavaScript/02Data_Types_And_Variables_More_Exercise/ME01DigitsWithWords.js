function digitsWithWords(digit) {

    let digitValue = -1;

    switch (digit) {
        case 'zero':
            digitValue = 0;
            break;
        case 'one':
            digitValue = 1;
            break;
        case 'two':
            digitValue = 2;
            break;
        case 'three':
            digitValue = 3;
            break;
        case 'four':
            digitValue = 4;
            break;
        case 'five':
            digitValue = 5;
            break;
        case 'six':
            digitValue = 6;
            break;
        case 'seven':
            digitValue = 7;
            break;
        case 'eight':
            digitValue = 8;
            break;
        case 'nine':
            digitValue = 9;
            break;
    }

    if (digitValue >= 0 && digitValue <= 9) {
        console.log(digitValue);
    }

}

// digitsWithWords('nine');
// digitsWithWords('two');
// digitsWithWords('zero');