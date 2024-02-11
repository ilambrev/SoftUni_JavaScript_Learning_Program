class SummerCamp {
    priceForTheCamp = { child: 150, student: 300, collegian: 500 };

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.findIndex(p => p.name === name) > -1) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        const newParticipient = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0,
        };

        this.listOfParticipants.push(newParticipient);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const index = this.listOfParticipants.findIndex(p => p.name === name);

        if (index === -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        const firstPlayer = this.listOfParticipants.find(p => p.name === participant1);

        if (firstPlayer === undefined) {
            throw new Error('Invalid entered name/s.');
        }

        switch (typeOfGame) {
            case 'WaterBalloonFights':
                const secondPlayer = this.listOfParticipants.find(p => p.name === participant2);

                if (secondPlayer === undefined) {
                    throw new Error('Invalid entered name/s.');
                }

                if (firstPlayer.condition !== secondPlayer.condition) {
                    throw new Error('Choose players with equal condition.');
                }

                if (firstPlayer.power > secondPlayer.power) {
                    firstPlayer.wins += 1;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`;
                } else if (firstPlayer.power < secondPlayer.power) {
                    secondPlayer.wins += 1;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`;
                } else {
                    return 'There is no winner.';
                }
            case 'Battleship':
                firstPlayer.power += 20;

                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

    }

    toString() {
        const firstLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        const nextLines = `${this.listOfParticipants.sort((p1, p2) => p2.wins - p1.wins)
            .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`).join('\n')}`;

        return `${firstLine}\n${nextLines}`;
    }
}

// Input 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// Input 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// Input 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// Input 4
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.toString());