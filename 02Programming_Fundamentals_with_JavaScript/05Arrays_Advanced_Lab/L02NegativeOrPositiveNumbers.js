function negativeOrPositive(input) {

    let resultArr = [];

    for (let element of input) {

        let elementAsNumber = Number(element);

        if (elementAsNumber >= 0) {

            resultArr.push(elementAsNumber);

        } else {

            resultArr.unshift(elementAsNumber);

        }

    }

    for (let num of resultArr) {

        console.log(num);

    }

}

// negativeOrPositive(['7', '-2', '8', '9']);
// negativeOrPositive(['3', '-2', '0', '-1']);