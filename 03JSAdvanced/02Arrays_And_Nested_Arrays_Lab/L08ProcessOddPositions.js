function processOddPositions(arr) {

    console.log(arr.reduce((acc, curr, i) => {

        if (i % 2 != 0) {
            acc.unshift(curr * 2);
        }

        return acc;

    }, []).join(' '));

}

// processOddPositions([10, 15, 20, 25]);
// processOddPositions([3, 0, 10, 4, 7, 3]);