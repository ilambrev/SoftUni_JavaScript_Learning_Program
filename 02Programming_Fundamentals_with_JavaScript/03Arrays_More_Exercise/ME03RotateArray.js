function rotateArray(arr) {

    let rotationNumber = Number(arr[arr.length - 1]);

    let resultArr = arr.slice(0, arr.length - 1);

    let realRotation = rotationNumber % resultArr.length;

    for (let i = 1; i <= realRotation; i++) {

        let lastElement = resultArr[resultArr.length - 1];

        for (let j = resultArr.length - 1; j >= 0; j--) {

            resultArr[j] = resultArr[j - 1];

        }

        resultArr[0] = lastElement;

    }

    console.log(resultArr.join(' '));

}

// rotateArray(['1', '2', '3', '4', '2']);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);