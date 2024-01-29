class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const newCandidatesAdded = new Set();

        for (let candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-').map(e => e.trim());
            yearsExperience = Number(yearsExperience);

            newCandidatesAdded.add(name);

            const index = this.jobCandidates.findIndex(c => c.name === name);

            if (index === -1) {
                const newCandidate = { name, education, yearsExperience };
                this.jobCandidates.push(newCandidate);
            } else {
                const currentYearsOfExperience = this.jobCandidates[index].yearsExperience;
                this.jobCandidates[index].yearsExperience = Math.max(currentYearsOfExperience, yearsExperience);
            }
        }

        return `You successfully added candidates: ${Array.from(newCandidatesAdded).join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-').map(e => e.trim());
        minimalExperience = Number(minimalExperience);

        const index = this.jobCandidates.findIndex(e => e.name === name);

        if (index === -1) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (this.jobCandidates[index].yearsExperience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        this.jobCandidates[index].yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const index = this.jobCandidates.findIndex(e => e.name === name);

        if (index === -1) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        const candidate = this.jobCandidates[index];
        let salary = '';

        switch (candidate.education) {
            case 'Bachelor':
                salary = '$50,000';
                break;
            case 'Master':
                salary = '$60,000';
                break;
            default:
                salary = '$40,000';
                break;
        }

        return `${candidate.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length < 1) {
            throw new Error('Candidate Database is empty!');
        }

        return `Candidates list:\n${this.jobCandidates
            .sort((c1, c2) => c1.name.localeCompare(c2.name))
            .map(c => `${c.name}-${c.yearsExperience}`)
            .join('\n')}`;
    }

}

// Input 1
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// Input 2
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// Input 3
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

// Input 4
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase());