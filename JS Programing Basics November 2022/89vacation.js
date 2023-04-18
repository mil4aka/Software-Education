function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]); //0
    index++;
    let savedMoney = Number(input[index]); //1
    index++;
    let action = input[index]; //2
    index++;
    let changeInMoney = Number(input[index]); //3
    let consecutiveDaysSpendingCounter = 0;
    let totalDays = 0;

    while (true) {
        if (consecutiveDaysSpendingCounter == 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        }

        if (savedMoney >= moneyNeeded) {
            console.log(`You saved the money for ${totalDays} days.`);
            break;
        }

        if (action === "spend") {
            if (changeInMoney >= savedMoney) {
                savedMoney = 0;
            } else if (savedMoney > changeInMoney) {
                savedMoney -= changeInMoney;
            }
            consecutiveDaysSpendingCounter ++;
        } else if (action === "save") {
            savedMoney += changeInMoney;
            consecutiveDaysSpendingCounter = 0;
        }

        index++;
        action = input[index];
        index++;
        changeInMoney = Number(input[index]);
        totalDays++;
    }
}
// poneje slagam updeita na dannite v kraq na funkciqta, ako masivut e svurshil, te biqt undefined/NaN
//moje da gi sloja v nachaloto, kato primenlivite koito shte updeitva while cikula da sa suzdadeni v nego
//i da ne se updeitvat s nenujni danni, kato vednaga sled posledniq updeit da se proveri dali usloviqta sa 
//izpulneni i da se break-ne cikula


// vacation([
//     "2000", //0
//     "1000", //1
//     "spend", //2
//     "1200", //3
//     "save", //4
//     "2000"
// ])

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
// ])

// vacation([
//     "250",
//     "150",
//     "spend",
//     "50",
//     "spend",
//     "50",
//     "save",
//     "100",
//     "save",
//     "100"
// ])
