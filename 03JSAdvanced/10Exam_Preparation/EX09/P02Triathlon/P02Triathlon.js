class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        const minConditionPoints = 30;
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < minConditionPoints) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const numberOfDisciplines = Math.floor(condition / minConditionPoints);

        if (numberOfDisciplines < 3) {
            return `${participantName} could only complete ${numberOfDisciplines} of the disciplines`
        }

        const newFinalist = {
            participantName: participantName,
            participantGender: this.participants[participantName],
        };

        this.listOfFinalists.push(newFinalist);

        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        if (this.listOfFinalists.find(p => p.participantName === participantName) === undefined) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        let message = '';

        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        switch (criteria) {
            case 'male':
                const maleParticipient = this.listOfFinalists.find(p => p.participantGender === criteria);

                if (maleParticipient === undefined) {
                    message = `There are no ${criteria}'s that finished the competition`;
                } else {
                    message = `${maleParticipient.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }

                break;
            case 'female':
                const femaleParticipient = this.listOfFinalists.find(p => p.participantGender === criteria);

                if (femaleParticipient === undefined) {
                    message = `There are no ${criteria}'s that finished the competition`;
                } else {
                    message = `${femaleParticipient.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }

                break;
            case 'all':
                message = `List of all ${this.competitionName} finalists:\n${this.listOfFinalists.map(f => `${f.participantName}`).join('\n')}`;

                break;
        }

        return message;
    }
}

// Input 1
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// Input 2
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// Input 3
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// Input 4
// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// Input 5
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// Input 6
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));