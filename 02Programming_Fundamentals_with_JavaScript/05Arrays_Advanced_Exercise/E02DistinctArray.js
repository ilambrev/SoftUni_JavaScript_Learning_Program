function distinctArray(numbers) {

    let result = [];

    for (let number of numbers) {

        if (!result.includes(number)) {

            result.push(number);

        }

    }

    console.log(result.join(' '));

}

// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);