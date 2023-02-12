function movieStars(input) {

    let budgetForActors = Number(input[0]);
    let actorName = input[1];
    let index = 1;

    let actorsExpenses = 0;

    while (actorName !== "ACTION") {

        let currentActorRemuneration = 0;

        if (actorName.length > 15) {
            currentActorRemuneration = 0.20 * (budgetForActors - actorsExpenses);
        } else {
            index++;
            currentActorRemuneration = Number(input[index]);
        }

        actorsExpenses += currentActorRemuneration;

        if (budgetForActors - actorsExpenses < 0) {
            break;
        }

        index++;
        actorName = input[index];

    }

    let balance = budgetForActors - actorsExpenses;

    if (balance >= 0) {
        console.log(`We are left with ${balance.toFixed(2)} leva.`)
    } else {
        console.log(`We need ${Math.abs(balance).toFixed(2)} leva for our actors.`);
    }

}

// movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
// movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);