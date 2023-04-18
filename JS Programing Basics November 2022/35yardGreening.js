function yardGreening (input) {
    let pricePerSqM = 7.61;
    let sqM = Number(input[0]);
    let cenaOzelenqvane = pricePerSqM * sqM
    let discount = cenaOzelenqvane * 0.18;
    let finalPrice = cenaOzelenqvane - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

 yardGreening(["550"]);
 yardGreening(["150"]);
