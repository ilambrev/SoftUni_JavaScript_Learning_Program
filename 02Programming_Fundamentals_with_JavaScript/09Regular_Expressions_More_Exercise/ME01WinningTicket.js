function winningTicket(ticketsAsString) {
    const requiredSymbols = 20;
    const tickets = ticketsAsString.split(',').map(t => t.trim());
    const winningSigns = ['@', '#', '$', '\\^'];
    const messages = [];

    tickets.forEach(t => {
        if (t.length != requiredSymbols) {
            messages.push('invalid ticket');
            return;
        }

        let message = `ticket "${t}" - no match`;
        const leftHalf = t.slice(0, 10);
        const rightHalf = t.slice(10);

        for (let i = 0; i < winningSigns.length; i++) {
            let isWinningTicket = false;
            let winningSign = winningSigns[i];

            for (let j = 10; j >= 6; j--) {
                winningPattern = new RegExp(`[${winningSign}]{${j}}`);

                if (leftHalf.match(winningPattern) != null && rightHalf.match(winningPattern) != null) {
                    message = `ticket "${t}" - ${j}${winningSign.slice(winningSign.length - 1)}`;

                    if (j == 10) {
                        message = message + ' Jackpot!';
                    }

                    isWinningTicket = true;
                    break;
                }
            }

            if (isWinningTicket) {
                break;
            }
        }

        messages.push(message);
    });

    console.log(messages.join('\n'));
}

// winningTicket('Cash$$$$$$Ca$$$$$$sh');
// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
// winningTicket('validticketnomatch:(');