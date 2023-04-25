function salary(input) {
    let openTabs = Number(input[0]);
    let salaryMoney = Number(input[1]);
    let totalTabs = input.length;

    for (i = 2; i <= totalTabs - 1 && salaryMoney > 0; i++) {
        if (input[i] === "Facebook") {
            salaryMoney -= 150;
        } else if (input[i] === "Instagram") {
            salaryMoney -= 100;
        } else if (input[i] === "Reddit") {
            salaryMoney -= 50;
        } else {
            salaryMoney += 0;
        };
    };

    if (salaryMoney <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(Math.floor(salaryMoney));
    };
};

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);

