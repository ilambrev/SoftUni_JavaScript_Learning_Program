function salary(input) {

    let openTabsNumber = Number(input[0]);
    let salary = Number(input[1]);

    let salaryRemainder = salary;

    for (let i = 1; i <= openTabsNumber; i++) {
        let site = input[i + 1];
        switch (site) {
            case "Facebook":
                salaryRemainder -= 150;
                break;
            case "Instagram":
                salaryRemainder -= 100;
                break;
            case "Reddit":
                salaryRemainder -= 50;
                break;
        }

        if (salaryRemainder <= 0) {
            break;
        }
    }

    if (salaryRemainder > 0) {
        console.log(salaryRemainder);
    } else {
        console.log("You have lost your salary.");
    }

}

// salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
// salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);