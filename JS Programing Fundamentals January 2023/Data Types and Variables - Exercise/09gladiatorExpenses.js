function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let currentGame = 1;
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmor = 0;

    while (currentGame <= lostFights) {
        if (currentGame % 2 == 0) {
            brokenHelmets++;
        }
        if (currentGame % 3 == 0) {
            brokenSwords++;
        }
        if (currentGame % 6 === 0) {
            brokenShields++;
        }
        if (currentGame % 12 == 0) {
            brokenArmor++;
        }
        currentGame++;
    }
    let totalExpenses = brokenHelmets * helmetPrice + brokenSwords *
        swordPrice + brokenShields * shieldPrice + brokenArmor * armorPrice;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)
// gladiatorExpenses(23, 12.50, 21.50, 40, 200)