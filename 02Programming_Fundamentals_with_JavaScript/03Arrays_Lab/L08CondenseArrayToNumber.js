function condenseArrayToNumber(arr) {

    let condensed = arr;

    while (condensed.length > 1) {

        let bufferArr = new Array(condensed.length - 1);

        for (let i = 0; i < condensed.length - 1; i++) {

            bufferArr[i] = condensed[i] + condensed[i + 1];

        }

        condensed = bufferArr;

    }

    console.log(condensed[0]);

}

// condenseArrayToNumber([2, 10, 3]);
// condenseArrayToNumber([5, 0, 4, 1, 2]);
// condenseArrayToNumber([1]);