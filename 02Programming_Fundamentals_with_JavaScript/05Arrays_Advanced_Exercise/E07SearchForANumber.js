function searchForANumber(numbers, commands) {

    let elementsToTake = commands[0];
    let elementsToDelete = commands[1];
    let searchedNumber = commands[2];

    let newArr = numbers.slice(0, elementsToTake);
    newArr.splice(0, elementsToDelete);

    let timesNumberOccurs = newArr.filter(x => x == searchedNumber).length;

    console.log(`Number ${searchedNumber} occurs ${timesNumberOccurs} times.`);

}

// searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);