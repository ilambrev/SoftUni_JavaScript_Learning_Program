function numbers(numbersAsString) {

    let numbersArr = numbersAsString.split(' ').map(n => { return Number(n) }).sort((n1, n2) => { return n2 - n1 });

    let averageValue = average(numbersArr);

    let resultArr = findTopFive(numbersArr);

    function findTopFive(numbersArr) {

        let resultArr = [];

        for (let number of numbersArr) {

            if (number > averageValue) {

                resultArr.push(number);

                if (resultArr.length === 5) {

                    break;

                }

            }

        }

        return resultArr;

    }

    function average(numbersArr) {

        let sumOfElements = 0;

        for (let number of numbersArr) {

            sumOfElements += number;

        }

        return sumOfElements / numbersArr.length;

    }

    console.log(resultArr.length > 0 ? resultArr.join(' ') : 'No');

}

// numbers('10 20 30 40 50');
// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// numbers('1');
// numbers('-1 -2 -3 -4 -5 -6');