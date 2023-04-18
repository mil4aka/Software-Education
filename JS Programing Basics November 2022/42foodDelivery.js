function foodDelivery(input) {
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veganMenuPrice = 8.15;
    let orderedChickenMenus = Number(input[0]);
    let orderedFishMenus = Number(input[1]);
    let orderedVeganMenus = Number(input[2]);
    let deliveryCost = 2.50
    let billPrice = chickenMenuPrice * orderedChickenMenus + fishMenuPrice * orderedFishMenus + veganMenuPrice * orderedVeganMenus;
    let dessert = billPrice * 0.2;
    let totalCost = billPrice + dessert + deliveryCost;

    console.log(totalCost);
}

foodDelivery(["2", "4", "3"])
