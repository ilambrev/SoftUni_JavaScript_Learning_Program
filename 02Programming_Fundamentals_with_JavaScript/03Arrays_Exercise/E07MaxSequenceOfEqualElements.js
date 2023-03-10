function maxSequenceOfEqualElements(arr) {

    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {

        let currentSequence = [arr[i]];

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] === arr[i]) {

                currentSequence.push(arr[j]);

            } else {

                i = j - 1;
                break;

            }

        }

        if (currentSequence.length > longestSequence.length) {

            longestSequence = currentSequence.slice();

        }

    }

    console.log(longestSequence.join(' '));

}

// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);