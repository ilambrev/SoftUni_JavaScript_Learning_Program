function mergeArray(firstArr, secondArr) {

    let resultArr = [];

    for (let i = 0; i < firstArr.length; i++) {

        if (i % 2 === 0) {

            resultArr.push((Number(firstArr[i]) + Number(secondArr[i])).toString());

        } else {

            resultArr.push(firstArr[i] + secondArr[i]);

        }

    }

    console.log(resultArr.join(' - '));

}

// mergeArray(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// mergeArray(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);