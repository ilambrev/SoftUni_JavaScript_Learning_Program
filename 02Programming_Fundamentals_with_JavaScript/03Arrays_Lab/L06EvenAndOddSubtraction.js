function evenAndOddSubstraction(arr) {

    let sumOfEvens = 0;
    let sumOfOdds = 0;

    for (let element of arr) {

        let currentElementValue = Number(element);

        if (currentElementValue % 2 === 0) {
            sumOfEvens += currentElementValue;
        } else {
            sumOfOdds += currentElementValue;
        }

    }

    console.log(sumOfEvens - sumOfOdds);

}

// evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubstraction([3, 5, 7, 9]);
// evenAndOddSubstraction([2, 4, 6, 8, 10]);