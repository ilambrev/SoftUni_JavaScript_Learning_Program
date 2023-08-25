function addAndRemoveElements(commands) {

    let resultArr = [];

    for (let i = 0; i <= commands.length; i++) {

        switch (commands[i]) {
            case 'add':
                resultArr.push(i + 1);
                break;
            case 'remove':
                if (resultArr.length > 0) {
                    resultArr.pop();
                }
                break;
        }

    }

    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }

}

// addAndRemoveElements(['add', 'add', 'add', 'add']);
// addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// addAndRemoveElements(['remove', 'remove', 'remove']);