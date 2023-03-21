function addAndSubstract(numOne, numTwo, numThree) {

    let sum = function (numOne, numTwo) {

        return numOne + numTwo;

    }

    let substract = function (numThree) {

        return sum(numOne, numTwo) - numThree;

    }

    console.log(substract(numThree));

}

addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
addAndSubstract(42, 58, 100)