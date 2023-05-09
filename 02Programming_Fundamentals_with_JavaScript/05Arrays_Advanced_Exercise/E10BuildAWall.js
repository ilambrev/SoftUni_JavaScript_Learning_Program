function buildAWall(input) {

    const targetHeight = 30;
    const feetPerDay = 1;
    const cubicYardsOfCocretePerFoot = 195;
    const pricePerCubicYardOfConcrete = 1900;

    let sectionsHeight = input.sort((num1, num2) => num1 - num2).slice();
    let daysToComplete = targetHeight / feetPerDay - sectionsHeight[0];

    let totalConcreteConsumption = [];

    for (let i = 1; i <= daysToComplete; i++) {

        let concreteConsumptionForDay = 0;

        for (let j = 0; j < sectionsHeight.length; j++) {

            if (sectionsHeight[j] < 30) {

                sectionsHeight[j]++;
                concreteConsumptionForDay += cubicYardsOfCocretePerFoot;

            } else {

                break;

            }

        }

        totalConcreteConsumption.push(concreteConsumptionForDay);

    }

    console.log(totalConcreteConsumption.join(', '));
    console.log(totalConcreteConsumption.reduce((amount1, amount2) => amount1 + amount2) * pricePerCubicYardOfConcrete + ' pesos');

}

// buildAWall([21, 25, 28]);
// buildAWall([17]);
// buildAWall([17, 22, 17, 19, 17]);