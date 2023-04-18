function zooShop(input) {
    let dogFood = 2.5;
    let catFood = 4;
    let totalCost = Number(input[0]) * dogFood + Number(input[1]) * catFood
    console.log(`${totalCost} lv.`)
}
zooShop(["5", "4"])