class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;

        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        const neededResources = time * 10;
        const difference = this.resources - neededResources;

        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= neededResources;

        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        const resourcesRechargeAmount = time * 10;

        if (this.resources + resourcesRechargeAmount >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources += resourcesRechargeAmount;
            return `You have rested for ${time} hours and gained ${resourcesRechargeAmount}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }


        switch (criteria) {
            case 'hard':
                const hardHikes = this.listOfHikes
                    .filter(h => h.difficultyLevel === 'hard')
                    .sort((h1, h2) => h1.time - h2.time);

                if (hardHikes.length === 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`;
                } else {
                    return `${this.username}'s best ${criteria} hike is ${hardHikes[0].peak} peak, for ${hardHikes[0].time} hours`;
                }
            case 'easy':
                const easyHikes = this.listOfHikes
                    .filter(h => h.difficultyLevel === 'easy')
                    .sort((h1, h2) => h1.time - h2.time);

                if (easyHikes.length === 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`;
                } else {
                    return `${this.username}'s best ${criteria} hike is ${easyHikes[0].peak} peak, for ${easyHikes[0].time} hours`;
                }
            case 'all':
                return `All hiking records:\n${this.listOfHikes
                    .map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`)
                    .join('\n')}`;
        }

    }
}

// Input 1
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// Input 2
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// Input 3
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// Input 4
// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

// Input 5
// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));