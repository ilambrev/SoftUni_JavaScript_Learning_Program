function extractIncreasingSubsequenceFromArray(arr) {

    return arr.reduce((acc, curr) => {
        if (acc.length == 0 || acc[acc.length - 1] <= curr) {
            acc.push(curr);
        }

        return acc;

    }, []);

}

// console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
// console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));