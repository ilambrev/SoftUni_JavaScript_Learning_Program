function subSum(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    const startIndex = start < 0 ? 0 : start;
    const endIndex = end > numbers.length - 1 ? numbers.length - 1 : end;

    const sum = numbers.slice(startIndex, endIndex + 1).reduce((acc, curr) => {
        if (typeof Number(curr) !== 'number') {
            return NaN;
        }

        acc += Number(curr);

        return acc;
    }, 0);

    return sum;
}

// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));

// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));

// console.log(subSum([10, 'twenty', 30, 40], 0, 2));

// console.log(subSum([], 1, 2));

// console.log(subSum('text', 0, 2));