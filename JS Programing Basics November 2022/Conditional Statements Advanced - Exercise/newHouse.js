function newHouse(input) {
    let flowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let roses = 5.00;
    let dahlias = 3.80;
    let tulips = 2.80;
    let narcissus = 3.00;
    let gladiolus = 2.50;
    let totalExpensesRoses = roses * numberOfFlowers;
    let totalExpensesDahlias = dahlias * numberOfFlowers;
    let totalExpensesTulips = tulips * numberOfFlowers;
    let totalExpensesNarcissus = narcissus * numberOfFlowers;
    let totalExpensesGladiolus = gladiolus * numberOfFlowers;
    let finalPrice = 0;

    if (flowers == "Roses") {
        finalPrice = totalExpensesRoses;
        if (numberOfFlowers > 80) {
            finalPrice = totalExpensesRoses * 0.90;
        };
    } else if (flowers == "Dahlias") {
        finalPrice = totalExpensesDahlias;
        if (numberOfFlowers > 90) {
            finalPrice = totalExpensesDahlias * 0.85;
        };
    } else if (flowers == "Tulips") {
        finalPrice = totalExpensesTulips;
        if (numberOfFlowers > 80) {
            finalPrice = totalExpensesTulips * 0.85;
        };
    } else if (flowers == "Narcissus") {
        finalPrice = totalExpensesNarcissus;
        if (numberOfFlowers < 120) {
            finalPrice = totalExpensesNarcissus * 1.15;
        };
    } else if (flowers == "Gladiolus") {
        finalPrice = totalExpensesGladiolus;
        if (numberOfFlowers < 80) {
            finalPrice = totalExpensesGladiolus * 1.20;
        };
    };

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else if (finalPrice > budget) {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    };
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);


