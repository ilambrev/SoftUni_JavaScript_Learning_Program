function agregateElements(arr) {

    console.log(arr.reduce((acc, curr) => acc += curr, 0));
    console.log(arr.reduce((acc, curr) => acc += 1 / curr, 0));
    console.log(arr.join(''));

}

// agregateElements([1, 2, 3]);
// agregateElements([2, 4, 8, 16]);