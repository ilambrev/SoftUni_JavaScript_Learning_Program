function negativePositiveNumbers(arr) {

    console.log(arr.reduce((acc, curr) => {
        if (curr < 0) {
            acc.unshift(curr);
        } else {
            acc.push(curr);
        }

        return acc;

    }, []).join('\n'));

}

// negativePositiveNumbers([7, -2, 8, 9]);
// negativePositiveNumbers([3, -2, 0, -1]);