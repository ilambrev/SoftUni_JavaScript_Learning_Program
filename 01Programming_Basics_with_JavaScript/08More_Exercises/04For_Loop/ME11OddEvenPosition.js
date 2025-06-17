function oddEvenPositions(input) {
    const nums = Number(input[0]);
    let oddSum = 0;
    let oddMin = Number.MAX_VALUE;
    let oddMax = Number.MIN_VALUE;
    let oddCounter = 0;
    let evenSum = 0;
    let evenMin = Number.MAX_VALUE;;
    let evenMax = Number.MIN_VALUE;
    let evenCounter = 0;

    for (let i = 1; i <= nums; i++) {
        const num = Number(input[i]);
        if (i % 2 == 0) {
            evenSum += num;
            if (evenCounter == 0) {
                evenMin = num;
                evenMax = num;
            } else {
                if (num < evenMin) {
                    evenMin = num;
                }
                if (num > evenMax) {
                    evenMax = num;
                }
            }
            evenCounter++;
        } else {
            oddSum += num;
            if (oddCounter == 0) {
                oddMin = num;
                oddMax = num;
            } else {
                if (num < oddMin) {
                    oddMin = num;
                }
                if (num > oddMax) {
                    oddMax = num;
                }
            }
            oddCounter++;
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddCounter == 0 ? 'No' : oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddCounter == 0 ? 'No' : oddMax.toFixed(2)},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenCounter == 0 ? 'No' : evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenCounter == 0 ? 'No' : evenMax.toFixed(2)}`);
}

// oddEvenPositions(['6', '2', '3', '5', '4', '2', '1']);
// oddEvenPositions(['2', '1.5', '-2.5']);
// oddEvenPositions(['1', '1']);
// oddEvenPositions(['0']);
// oddEvenPositions(['5', '3', '-2', '8', '11', '-3']);
// oddEvenPositions(['4', '1.5', '1.75', '1.5', '1.75']);
// oddEvenPositions(['1', '-5']);
// oddEvenPositions(['3', '-1', '-2', '-3']);