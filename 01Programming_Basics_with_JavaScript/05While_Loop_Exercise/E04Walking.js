function walking(input) {

    let index = 0;
    let totalSteps = 0;

    while (index < input.length) {

        let record = input[index];

        if (record === "Going home") {
            totalSteps += Number(input[index + 1]);
            break;
        }

        totalSteps += Number(record);

        index++;
    }

    let stepsToGoal = 10000 - totalSteps;

    if (stepsToGoal <= 0) {
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(stepsToGoal)} steps over the goal!`);
    } else {
        console.log(`${stepsToGoal} more steps to reach goal.`)
    }

}

// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["125", "250", "4000", "30", "2678", "4682"]);