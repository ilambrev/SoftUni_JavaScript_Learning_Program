function sortArray(arr, order) {

    if (order === 'asc') {
        return arr.sort((e1, e2) => e1 - e2);
    } else if (order === 'desc') {
        return arr.sort((e1, e2) => e2 - e1);
    } else {
        return arr;
    }
}

// console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

// console.log(sortArray([14, 7, 17, 6, 8], 'desc'));