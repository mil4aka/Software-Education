function fishingBoat(input) {
    let totalBudget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let rentCost = 0;

    if (season == "Spring") {
        rentCost = 3000;
    } else if (season == "Summer") {
        rentCost = 4200;
    } else if (season == "Autumn") {
        rentCost = 4200;
    } else if (season == "Winter") {
        rentCost = 2600;
    };

    if (fishermanCount <= 6) {
        rentCost *= 0.90;
    } else if (fishermanCount >= 7 && fishermanCount <= 11) {
        rentCost *= 0.85;
    } else if (fishermanCount >= 12) {
        rentCost *= 0.75;
    };

    if (season != "Autumn") {
        if (fishermanCount % 2 == 0) {
            rentCost *= 0.95;
        };
    };

    if (totalBudget >= rentCost) {
        console.log(`Yes! You have ${(totalBudget - rentCost).toFixed(2)} leva left.`);
    } else if (rentCost > totalBudget) {
        console.log(`Not enough money! You need ${(rentCost - totalBudget).toFixed(2)} leva.`);
    };
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
