function oddAndEvenSum (number) {
    let numberToString = String(number);
    let sumEven = 0;
    let sumOdd = 0;
    for (let el of numberToString) {
        let elToNum = Number(el);
        if (elToNum % 2 == 0) {
            sumEven += elToNum;
        } else {
            sumOdd += elToNum;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)