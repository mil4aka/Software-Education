function magicSum(array, magicNum) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            let uniquePairsArr = [];
            if (array[i] + array[j] == magicNum) {
                uniquePairsArr.push(array[i]);
                uniquePairsArr.push (array[j]);
                console.log(uniquePairsArr.join(" "));
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)