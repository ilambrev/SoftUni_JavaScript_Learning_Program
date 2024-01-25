class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        let employeeProperties = Array.from(arguments);

        if (employeeProperties.filter(p => p === null || p === undefined || p === '').length > 0) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        const employee = { name, salary, position };

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [employee];
        } else {
            this.departments[department].push(employee);
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const bestDepartment = Object.entries(this.departments).map(([k, v]) => {
            const department = {
                name: k,
                averageSalary: v.reduce((acc, curr) => acc += curr.salary, 0) / v.length,
                employees: v,
            };

            return department
        }).sort((d1, d2) => d2.averageSalary - d1.averageSalary)[0];

        bestDepartment.employees.sort((e1, e2) => {
            if (e1.salary > e2.salary) return -1;
            if (e1.salary < e2.salary) return 1;
            if (e1.name > e2.name) return 1;
            if (e1.name < e2.name) return -1;
        });

        let result = `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary
            .toFixed(2)}\n${bestDepartment.employees
                .map(e => `${e.name} ${e.salary} ${e.position}`)
                .join('\n')}`;

        return result;
    }
}

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());