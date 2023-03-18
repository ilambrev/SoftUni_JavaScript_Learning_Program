function evenAndOddSubstraction(arr) {

    let result = 0;

    for (let element of arr) {

        let currentElementValue = Number(element);

        if (currentElementValue % 2 === 0) {
            result += currentElementValue;
        } else {
            result -= currentElementValue;
        }

    }

    console.log(result);

}

evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);