function equalArrays(firstArr, secondArr) {

    let index = 0;
    let sumOfElementsValues = 0;
    let areArraysIdentical = true;

    for (let i = 0; i < firstArr.length; i++) {

        index = i;

        let currentFirstArrElementValue = Number(firstArr[i]);
        let currentSecondArrElementValue = Number(secondArr[i]);

        if (currentFirstArrElementValue === currentSecondArrElementValue) {

            sumOfElementsValues += currentFirstArrElementValue;

        } else {

            areArraysIdentical = false;
            break;

        }

    }

    if (areArraysIdentical) {

        console.log(`Arrays are identical. Sum: ${sumOfElementsValues}`);

    } else {

        console.log(`Arrays are not identical. Found difference at ${index} index`);

    }

}

// equalArrays(['10', '20', '30'], ['10', '20', '30']);
// equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// equalArrays(['1'], ['10']);