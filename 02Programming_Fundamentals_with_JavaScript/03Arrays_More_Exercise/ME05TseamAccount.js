function tseamAccount(commands) {

    let account = commands[0].split(' ');

    let index = 1;

    while (commands[index] !== 'Play!') {

        let commandDetails = commands[index].split(' ');
        let command = commandDetails[0];
        let gameName = commandDetails[1];

        switch (command) {

            case 'Install':

                if (!account.includes(gameName)) {
                    account.push(gameName);
                }

                break;
            case 'Uninstall':

                if (account.includes(gameName)) {
                    account = uninstallGame(account, gameName).slice();;
                }

                break;
            case 'Update':

                if (account.includes(gameName)) {
                    account = updateGame(account, gameName).slice();;
                }

                break;
            case 'Expansion':

                let gameDetails = gameName.split('-');
                let nameOfGame = gameDetails[0];
                let expansion = gameDetails[1];

                if (account.includes(nameOfGame) && !account.includes(nameOfGame + ':' + expansion)) {
                    account = installExpansion(account, nameOfGame, expansion).slice();;
                }

                break;

        }

        index++;

    }

    function uninstallGame(array, gameName) {
        let newArr = [];

        for (let element of array) {

            if (element !== gameName) {
                newArr.push(element);
            }

        }

        return newArr;

    }

    function updateGame(array, gameName) {
        let newArr = [];

        for (let element of array) {

            if (element !== gameName) {
                newArr.push(element);
            }

        }

        newArr.push(gameName);

        return newArr;

    }

    function installExpansion(array, nameOfGame, expansion) {
        let newArr = [];

        for (let element of array) {

            newArr.push(element);

            if (element === nameOfGame) {
                newArr.push(element + ':' + expansion);
            }

        }

        return newArr;

    }

    console.log(account.join(' '));

}

// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
// tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);