function lastKNumbersSequence(n, k) {

    let resultArr = [1];

    for (let i = 1; i < n; i++) {

        let nextNumber = 0;

        for (let j = 1; j <= (k > i ? i : k); j++) {

            nextNumber += resultArr[i - j];

        }

        resultArr.push(nextNumber);

    }

    console.log(resultArr.join(' '));

}

// lastKNumbersSequence(6, 3);
// lastKNumbersSequence(8, 2);