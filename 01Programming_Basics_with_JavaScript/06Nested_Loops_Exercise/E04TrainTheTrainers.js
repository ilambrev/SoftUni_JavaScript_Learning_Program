function trainTheTrainers(input) {

    let juryMembersCount = Number(input[0]);
    let presentationName = input[1];
    let assessmentsSum = 0;
    let presentationsCount = 0;
    let index = 2;

    while (presentationName !== "Finish") {
        presentationsCount++;

        let presentationAssessmentsSum = 0;
        let averagePresentationAssessment = 0;

        for (let i = index; i < index + juryMembersCount; i++) {
            presentationAssessmentsSum += Number(input[i]);
        }

        averagePresentationAssessment = presentationAssessmentsSum / juryMembersCount;

        assessmentsSum += averagePresentationAssessment;

        console.log(`${presentationName} - ${averagePresentationAssessment.toFixed(2)}.`);

        index += juryMembersCount;
        presentationName = input[index];
        index++;
    }

    let finalAssessment = assessmentsSum / presentationsCount;

    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);

}

// trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
// trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
// trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);