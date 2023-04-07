function movingTarget(input) {

    let targets = input[0].split(' ').map(t => { return Number(t) });
    let commands = input.slice(1);
    let command = commands[0];
    let index = 0;

    while (command !== 'End') {

        let commandParams = command.split(' ');
        let commandName = commandParams[0];
        let targetIndex = Number(commandParams[1]);

        switch (commandName) {
            case 'Shoot':
                let power = Number(commandParams[2]);
                shoot(targets, targetIndex, power);
                break;
            case 'Add':
                let value = Number(commandParams[2]);
                add(targets, targetIndex, value);
                break;
            case 'Strike':
                let radius = Number(commandParams[2]);
                strike(targets, targetIndex, radius);
                break;
        }

        index++;
        command = commands[index];

    }

    function shoot(targets, targetIndex, power) {

        if (targetIndex >= 0 && targetIndex < targets.length) {

            if (power < targets[targetIndex]) {

                targets[targetIndex] -= power;

            } else {

                targets = targets.splice(targetIndex, 1);

            }

        }

    }

    function add(targets, targetIndex, value) {

        if (targetIndex >= 0 && targetIndex < targets.length) {

            targets.splice(targetIndex, 0, value);

        } else {

            console.log('Invalid placement!');

        }

    }

    function strike(targets, targetIndex, radius) {

        if (targetIndex - radius >= 0 && targetIndex + radius < targets.length) {

            targets = targets.splice(targetIndex - radius, ((2 * radius) + 1));

        } else {

            console.log('Strike missed!');

        }

    }

    console.log(targets.join('|'));

}

// movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
// movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);