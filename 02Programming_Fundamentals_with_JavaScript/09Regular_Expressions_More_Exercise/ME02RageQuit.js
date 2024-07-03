function rageQuit(input) {
    const strRegexp = /[^0-9]+/g;
    const numRegexp = /[0-9]+/g;

    const strings = input[0].toUpperCase().match(strRegexp);
    const nums = input[0].match(numRegexp).map(Number);

    const resultString = strings.reduce((acc, curr, i) => {
        acc += curr.repeat(nums[i]);
        return acc;
    }, '');

    const uniqueSymbols = resultString.split('').reduce((acc, curr) => {
        if (!acc.hasOwnProperty(curr)) {
            acc[curr] = 0;
        }

        acc[curr] += 1;

        return acc;
    }, {});

    console.log(`Unique symbols used: ${Object.keys(uniqueSymbols).length}`);
    console.log(resultString);
}

// rageQuit(['a3']);
// rageQuit(['aSd2&5s@1']);