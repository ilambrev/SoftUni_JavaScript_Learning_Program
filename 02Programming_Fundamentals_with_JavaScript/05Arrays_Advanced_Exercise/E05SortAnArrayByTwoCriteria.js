function sortingAnArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a, b) => {
        return a.length === b.length ?
            a.localeCompare(b, undefined, { sensitivity: 'base' }) :
            a.length - b.length
    });

    console.log(sortedArray.join('\n'));

}

// sortingAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortingAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);