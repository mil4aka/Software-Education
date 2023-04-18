function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veganMenuPrice = 8.15;
    let priceForOrder = (chickenMenus * chickenMenuPrice) + (fishMenus * fishMenuPrice) + (veganMenus * veganMenuPrice);
    let dessert = (priceForOrder / 100) * 20;
    let deliveryFee = 2.50;
    
    let totalOrder = priceForOrder + dessert + deliveryFee

    console.log(totalOrder);
}
foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);

