function maxNumber(array) {
    let arrayLength = array.length;
    let newArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let number1 = array[i];
        let isLargest = true;
        for (let j = i + 1; j < arrayLength; j++) {
            let number2 = array[j];
            if (number1 <= number2) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newArray.push(number1);
        }
    }
    console.log(newArray.join(" "));
}

maxNumber([1, 4, 3, 0])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])