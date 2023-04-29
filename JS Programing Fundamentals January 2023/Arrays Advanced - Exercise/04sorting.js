function sorting(arr) {
    let copiedArr = arr.slice();
    let copiedArrL = copiedArr.length;
    let sortedArr = copiedArr.sort((a, b) => a - b);
    let resultArr = [];

    for (let i = 1; i <= copiedArrL; i++) {
        if (i % 2 == 0) {
            resultArr.push(sortedArr.shift());
        } else {
            resultArr.push(sortedArr.pop());
        }
    }
    console.log(resultArr.join(" "));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])