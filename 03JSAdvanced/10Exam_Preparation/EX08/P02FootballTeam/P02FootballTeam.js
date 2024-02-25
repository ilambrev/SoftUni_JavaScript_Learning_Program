class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const invitedPlayersNames = [];

        for (let playerData of footballPlayers) {

            let [name, age, playerValue] = playerData.split('/');

            const player = {
                name: name,
                age: Number(age),
                playerValue: Number(playerValue),
            }

            const playerIndex = this.invitedPlayers.findIndex(p => p.name === name);

            if (playerIndex === -1) {
                this.invitedPlayers.push(player);
            } else if (this.invitedPlayers[playerIndex].playerValue < player.playerValue) {
                this.invitedPlayers[playerIndex].playerValue = player.playerValue;
            }

            if (invitedPlayersNames.find(p => p.name === name) === undefined) {
                invitedPlayersNames.push(name);
            }
        }

        return `You successfully invite ${invitedPlayersNames.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        offer = Number(offer);

        const player = this.invitedPlayers.find(p => p.name === name);

        if (player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (offer < player.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - offer} million more are needed to sign the contract!`);
        }

        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);

        if (player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < age) {
            const difference = age - player.age;

            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else if (difference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        return `Players list:\n${this.invitedPlayers
            .sort((p1, p2) => p1.name.localeCompare(p2.name))
            .map(p => `Player ${p.name}-${p.playerValue}`)
            .join('\n')}`;
    }
}

// Input 1
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// Input 2
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// Input 3
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// Input 4
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());