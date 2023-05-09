function browserHistory(browser, commands) {

    for (let command of commands) {

        if (command === 'Clear History and Cache') {

            browser['Open Tabs'].length = 0;
            browser['Recently Closed'].length = 0;
            browser['Browser Logs'].length = 0;

        } else {

            let commandName = command.split(' ')[0];
            let siteAddress = command.replace(commandName, '').trim();

            switch (commandName) {
                case 'Open':

                    browser['Open Tabs'].push(siteAddress);
                    browser['Browser Logs'].push(command);

                    break;
                case 'Close':

                    while (browser['Open Tabs'].includes(siteAddress)) {

                        let index = browser['Open Tabs'].indexOf(siteAddress);

                        browser['Open Tabs'].splice(index, 1);
                        browser['Recently Closed'].push(siteAddress);
                        browser['Browser Logs'].push(command);

                    }

                    break;
            }

        }

    }

    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);

}

// browserHistory(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );
// browserHistory(
//     {
//         "Browser Name": "Mozilla Firefox",
//         "Open Tabs": ["YouTube"],
//         "Recently Closed": ["Gmail", "Dropbox"],
//         "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
//     },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );