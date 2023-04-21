function godzillaVsCong(input) {
    let filmBudget = Number(input[0]);
    let actors = Number(input[1]);
    let actorClothesPrice = Number(input[2]);

    let ClothingCost = actorClothesPrice * actors;
    let movieDecor = filmBudget * 0.10;

    if (actors > 150) {
        ClothingCost *= 0.90;
    }

    let expenses = movieDecor + ClothingCost;

    if (expenses > filmBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses - filmBudget).toFixed(2)} leva more.`);
    }

    if (expenses <= filmBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - expenses).toFixed(2)} leva left.`);
    }
}

godzillaVsCong(["20000", "120", "55.5"]);
godzillaVsCong(["15437.62", "186", "57.99"]);
godzillaVsCong(["9587.88", "222", "55.68"]);