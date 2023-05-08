function companyUsers(input) {

    let companies = {};

    for (let line of input) {

        let companyInfo = line.split(' -> ');
        let company = companyInfo[0];
        let employee = companyInfo[1];

        if (!companies.hasOwnProperty(company)) {

            let emmployees = new Set();
            emmployees.add(employee);

            companies[company] = emmployees;

        } else {

            companies[company].add(employee);

        }

    }

    Object.entries(companies)
        .sort(([company1], [company2]) => company1.localeCompare(company2))
        .forEach(company => {

            company[1].size > 0 ? console.log(`${company[0]}\n-- ${Array.from(company[1]).join('\n-- ')}`) : console.log(`${company[0]}\n`);

        });


}

/*
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
*/