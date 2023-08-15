function race(input) {

    let participants = input[0].split(', ').reduce((res, curr) => {
        let participant = {
            name: curr,
            distance: 0,
        }
        res[curr] = participant;
        return res;
    },{});

    let infoLines = input.slice(1);
    let infoLine = infoLines.shift();

    const lettersRegexp = /[A-Za-z]/g;
    const digitsRegexp = /\d/g;

    while (infoLine !== 'end of race') {

        let name = extractName(infoLine);
        let distance = extractDistance(infoLine);

        if (participants.hasOwnProperty(name)) {
            participants[name].distance += distance;
        }
        
        infoLine = infoLines.shift();
    }

    let ranking = Object.values(participants).sort((p1, p2) => p2.distance - p1.distance).map(p => p.name).slice(0, 3);

    console.log(`1st place: ${ranking[0]}`);
    console.log(`2nd place: ${ranking[1]}`);
    console.log(`3rd place: ${ranking[2]}`);

    function extractName(infoLine) {

        return Array.from(infoLine.matchAll(lettersRegexp)).map(m => m[0]).join('');

    }

    function extractDistance(infoLine) {

        return Array.from(infoLine.matchAll(digitsRegexp)).map(m => Number(m[0])).reduce((res, curr) => res += curr, 0);

    }

}

/*
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);
*/