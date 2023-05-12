function deserializeString(input) {

    let lettersArr = [];
    let lineOfInput = input[0];
    let index = 0;

    while (lineOfInput !== 'end') {

        let letterData = lineOfInput.split(':');
        let letter = letterData[0];
        let indexes = letterData[1].split('/').map(index => Number(index));

        for (let i of indexes) {

            lettersArr[i] = letter;

        }

        index++;
        lineOfInput = input[index];

    }

    let string = lettersArr.join('');

    console.log(string);

}

// deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
// deserializeString(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']);