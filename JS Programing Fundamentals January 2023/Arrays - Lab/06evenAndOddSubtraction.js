function evenAndOddSubtraction (array) {
    let sumEven = 0;
    let sumOdd = 0;
    let difference = 0;
for (let num of array) {
    num % 2 == 0 ? sumEven += Number(num) : sumOdd += Number(num);
}

console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])