function gameOfIntervals(input) {
    const turns = Number(input[0]);
    let result = 0;
    let invalidNumbers = 0;
    let interval0To9 = 0;
    let interval10To19 = 0;
    let interval20To29 = 0;
    let interval30To39 = 0;
    let interval40To50 = 0;


    for (let i = 1; i <= turns; i++) {
        const number = Number(input[i]);

        if (number < 0 || number > 50) {
            result /= 2;
            invalidNumbers++;
        } else if (number < 10) {
            result += number * 0.2;
            interval0To9++;
        } else if (number < 20) {
            result += number * 0.3;
            interval10To19++;
        } else if (number < 30) {
            result += number * 0.4;
            interval20To29++;
        } else if (number < 40) {
            result += 50;
            interval30To39++;
        } else {
            result += 100;
            interval40To50++;
        }
    }

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${((interval0To9 / turns) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((interval10To19 / turns) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((interval20To29 / turns) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((interval30To39 / turns) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((interval40To50 / turns) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidNumbers / turns) * 100).toFixed(2)}%`);
}

// gameOfIntervals((['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']));