function supplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = (Number(input[3]) / 100);
    let pensCost = 5.8;
    let markerCost = 7.2;
    let cleanerCost = 1.2;
    let totalBeforeDiscount = pens * pensCost + markers * markerCost + cleaner * cleanerCost;
    let totalAfterDiscount = totalBeforeDiscount - (totalBeforeDiscount * discount);

    console.log(totalAfterDiscount);
}