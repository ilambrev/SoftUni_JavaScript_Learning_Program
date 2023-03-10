function maxNumber(arr) {

    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {

        let isNummerMax = true;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] <= arr[j]) {

                isNummerMax = false;
                break;

            }

        }

        if (isNummerMax) {

            resultArr.push(arr[i]);

        }

    }

    console.log(resultArr.join(' '));

}

// maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);