function sumEvenNumbers(arr) {

    let sumOfEvens = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentElement = Number(arr[i]);

        if (currentElement % 2 === 0) {
            sumOfEvens += currentElement;
        }

    }

    console.log(sumOfEvens);

}

// sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
// sumEvenNumbers(['3', '5', '7', '9']);
// sumEvenNumbers(['2', '4', '6', '8', '10']);