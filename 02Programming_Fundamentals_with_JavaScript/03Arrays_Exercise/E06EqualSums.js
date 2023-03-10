function equalSum(arr) {

    for (let i = 0; i < arr.length; i++) {

        let lefSum = i > 0 ? sumOfArrElements(arr.slice(0, i)) : 0;
        let rightSum = i < arr.length - 1 ? sumOfArrElements(arr.slice(i + 1, arr.length)) : 0;

        if (lefSum === rightSum) {

            console.log(i);
            break;

        }

        if (i === arr.length - 1) {

            console.log('no');

        }

    }


    function sumOfArrElements(array) {

        let sum = 0;

        for (let element of array) {

            sum += element;

        }

        return (sum);

    }

}

// equalSum([1, 2, 3, 3]);
// equalSum([1, 2]);
// equalSum([1]);
// equalSum([1, 2, 3]);
// equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);