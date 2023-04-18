function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = (Number(input[2]))/100;
    let totalSum = depositedSum + depositPeriod * ((depositedSum * annualInterestRate) / 12);
    console.log(totalSum);
}

depositCalculator(["200 ", "3 ", "5.7 "])
depositCalculator(["2350", "6 ", "7 "])