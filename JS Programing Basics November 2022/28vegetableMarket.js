function vegetable(input) {
    let index = 0;
    let priceVeg = Number(input[index]);
    index++;
    let priceFruit = Number(input[index]);
    index++;
    let totalVeg = Number(input[index]);
    index++;
    let totalFruit = Number(input[index]);
    let eurPrice = 1.94;
    let costVeg = priceVeg * totalVeg;
    let costFruit = priceFruit * totalFruit;

    let sum = (costFruit + costVeg) / eurPrice;

    console.log(sum.toFixed(2));


}

vegetable([0.194,
    19.4,
    10,
    10
])