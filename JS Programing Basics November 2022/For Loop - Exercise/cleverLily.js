function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyCost = Number(input[2]);
    let moneyBonus = 10;
    let moneySaved = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            toyCount++;
        } else {
            moneySaved += moneyBonus;
            moneySaved--;
            moneyBonus += 10;
        };
    };

    moneySaved += toyCost * toyCount;

    if (moneySaved >= washingMachine) {
        console.log(`Yes! ${(moneySaved - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - moneySaved).toFixed(2)}`);
    };
};

cleverLily(["10", "170.00", "6"]);
