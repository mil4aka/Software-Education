function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let changeInMoney = Number(input[index]);
    let consecutiveDaysSpending = 0;
    let totalDays = 0;

    while (true) {
        if (consecutiveDaysSpending == 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        };

        if (savedMoney >= moneyNeeded) {
            console.log(`You saved the money for ${totalDays} days.`);
            break;
        };

        if (action === "spend") {
            if (changeInMoney >= savedMoney) {
                savedMoney = 0;
            } else if (savedMoney > changeInMoney) {
                savedMoney -= changeInMoney;
            };
            consecutiveDaysSpending++;

        } else if (action === "save") {
            savedMoney += changeInMoney;
            consecutiveDaysSpending = 0;
        };

        index++;
        action = input[index];
        index++;
        changeInMoney = Number(input[index]);
        totalDays++;
    };
};


// vacation([
//     "2000", //0
//     "1000", //1
//     "spend", //2
//     "1200", //3
//     "save", //4
//     "2000"
// ]);

// vacation([
//     "110",
//     "60",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "save",
//     "10"
// ]);

vacation([
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"
]);
