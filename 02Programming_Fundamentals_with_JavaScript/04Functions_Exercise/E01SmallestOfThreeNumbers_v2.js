function smallestOfThreeNumbers(numOne, numTwo, numThree) {

    console.log(numTwo < numOne ? (numThree < numTwo ? numThree : numTwo) : (numThree < numOne ? numThree : numOne));

}

// smallestOfThreeNumbers(2, 5, 3);
// smallestOfThreeNumbers(600, 342, 123);
// smallestOfThreeNumbers(25, 21, 4);
// smallestOfThreeNumbers(2, 2, 2);