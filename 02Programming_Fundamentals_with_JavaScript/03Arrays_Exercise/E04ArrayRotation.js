function arrayRotation(arr, rotationsNumber) {

    let resultArr = [];
    let realRotations = rotationsNumber % arr.length;

    for (let i = 0; i < realRotations; i++) {

        resultArr.push(arr[i]);

    }

    resultArr = arr.slice(realRotations, arr.length).concat(resultArr);

    console.log(resultArr.join(' '));

}

// arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);