function addAndSubstract(arr) {

    let resultArr = [...arr];

    for (let i = 0; i < resultArr.length; i++) {

        resultArr[i] = resultArr[i] % 2 === 0 ? resultArr[i] + i : resultArr[i] - i;

    }

    console.log(resultArr);
    sumArrElements(arr);
    sumArrElements(resultArr);

    function sumArrElements(array) {

        let sum = 0;

        for (let elementValue of array) {

            sum += elementValue;

        }

        console.log(sum);

    }

}

// addAndSubstract([5, 15, 23, 56, 35]);
// addAndSubstract([-5, 11, 3, 0, 2]);