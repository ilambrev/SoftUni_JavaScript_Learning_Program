function softUniReception(input) {

    let firstEmployeeEfficiency = Number(input[0]);
    let secondEmployeeEfficiency = Number(input[1]);
    let thirdEmployeeEfficiency = Number(input[2]);
    let studentsCount = Number(input[3]);

    let studentsPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;

    let time = Math.ceil(studentsCount / studentsPerHour);

    time += time % 3 === 0 && studentsCount > 0 ? Math.floor(time / 3) - 1 : Math.floor(time / 3);

    console.log(`Time needed: ${time}h.`);

}

// softUniReception(['5', '6', '4', '20']);
// softUniReception(['1', '2', '3', '45']);
// softUniReception(['3', '2', '5', '40']);