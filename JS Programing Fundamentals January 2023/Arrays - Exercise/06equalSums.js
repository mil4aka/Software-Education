function equalSums(array) {
    let arrayLength = array.length;
    let isEqual = false;
    for (let i = 0; i < arrayLength; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        if (arrayLength == 1) {
            console.log("0");
            isEqual = true;
            break;
        }

        for (let k = i; k > 0; k--) {
            sumLeft += array[k - 1];
        }
        for (let j = i; j < arrayLength - 1; j++) {
            sumRight += array[j + 1];
        }

        if (sumLeft == sumRight && sumLeft  != 0) {
            console.log(i);
            isEqual = true;
            break;
        } 
    }
    if (!isEqual) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])