function condenseArr(arrNums) {
    let result = [];
    for (let element of arrNums) {
        result.push(element)
    }
    while (result.length > 1) {
        let tempArr = [];
        for (let i = 0; i < result.length - 1; i++) {
            tempArr[i] = result[i] + result[i + 1];
        }
        result = tempArr;
    }
    console.log(result.toString());
}

condenseArr([2, 10, 3])
