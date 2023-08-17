function sumOfNumbersNtoM(start, stop) {

    const step = 1;

    console.log(Array.from({ length: (Number(stop) - Number(start)) / step + 1 }, (_, i) => Number(start) + i * step)
        .reduce((acc, curr) => acc + curr, 0));

}

// sumOfNumbersNtoM('1', '5');
// sumOfNumbersNtoM('-8', '20');