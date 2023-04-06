function shootForTheWin(input) {

    let targets = input[0].split(' ').map(t => { return Number(t) });
    let commands = input.slice(1);
    let command = commands[0];
    let shotTargets = 0;
    let index = 0;

    while (command !== 'End') {

        let targetIndex = Number(command);

        if (targetIndex >= 0 && targetIndex < targets.length) {

            let targetValue = targets[targetIndex];
            targets[targetIndex] = -1;
            shotTargets++;

            for (let i = 0; i < targets.length; i++) {

                if (targets[i] > -1) {

                    if (targets[i] <= targetValue) {

                        targets[i] += targetValue;

                    } else {

                        targets[i] -= targetValue;

                    }

                }

            }

        }

        index++;
        command = commands[index];

    }

    console.log(`Shot targets: ${shotTargets} -> ` + targets.join(' '));

}

// shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
// shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);