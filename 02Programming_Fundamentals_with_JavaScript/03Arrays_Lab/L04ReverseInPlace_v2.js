function reverseInPlace(stringsArr) {



    for (let i = 0; i < stringsArr.length / 2; i++) {

        swapElements(stringsArr, i, stringsArr.length - 1 - i);

    }

    console.log(stringsArr.join(' '));

    function swapElements(arr, firstIndex, secondIndex) {

        let buffer = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = buffer;

    }

}

// reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);