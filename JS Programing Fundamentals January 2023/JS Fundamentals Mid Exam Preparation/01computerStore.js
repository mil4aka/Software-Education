function computerStore(arr) {
    let workArr = arr.slice();
    let workArrL = workArr.length;
    let totalPricePreTax = 0;
    let taxPercentage = 0.2;
    let totalSum = 0;

    for (let i = 0; i < workArrL; i++) {
        let currCommand = workArr[i];

        if (currCommand != "special" && currCommand != "regular") {
            if (Number(currCommand) < 0) {
                console.log(`Invalid price!`);
            } else {
                totalPricePreTax += Number(currCommand);
            }
        } else if (currCommand == "special") {
            totalSum = (totalPricePreTax * (1 + taxPercentage) * 0.9);
        } else if (currCommand == "regular") {
            totalSum = totalPricePreTax + (totalPricePreTax * taxPercentage);
        } 
    }

    if (totalSum == 0 ) {
        return console.log(`Invalid order!`);;
    }
    console.log(`Congratulations you've just bought a new computer!`)
    console.log(`Price without taxes: ${totalPricePreTax.toFixed(2)}$`);
    console.log(`Taxes: ${(totalPricePreTax * taxPercentage).toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalSum.toFixed(2)}$`);
}
    


// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])


// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ])

computerStore(['regular'])