function lastKNumbersSequence(n, k) {

    let sequence = [1];

    for (let i = 1; i < n; i++) {

        sequence.push(sequence.slice(i - k < 0 ? 0 : i - k, i).reduce((acc, curr) => acc + curr, 0));

    }

    return sequence;

}

// console.log(lastKNumbersSequence(6, 3));
// console.log(lastKNumbersSequence(8, 2));