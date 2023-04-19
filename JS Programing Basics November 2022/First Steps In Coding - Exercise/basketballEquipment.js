function basketballEquipment (input) {
    let basketballTax = Number(input[0]);
    let basketballShoes = (basketballTax / 100) * 60
    let basketballClothes = (basketballShoes / 100) * 80
    let basketballBall = (basketballClothes / 100) * 25
    let basketballAccessories = (basketballBall / 100) * 20
    let totalCost = basketballTax + basketballShoes + basketballClothes + basketballBall + basketballAccessories
    console.log(totalCost);

}
basketballEquipment(["365"]);
basketballEquipment(["550"]);
