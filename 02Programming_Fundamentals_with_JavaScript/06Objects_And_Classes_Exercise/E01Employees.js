function employees(input) {

    let employees = [];

    for (let line of input) {

        let number = line.length;

        let employee = {
            name: line,
            personalNum: number,
        }

        employees.push(employee);

    }

    for (let employee of employees) {

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);

    }

}

// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
// employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);