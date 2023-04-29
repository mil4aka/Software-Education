function listOfProducts (arr) {
    let sorted = arr.sort();
    let sortedArrL = sorted.length;
    let printArr = [];

    for (let i = 0; i < sortedArrL; i++) {
        printArr.push(`${i + 1}.${sorted[i]}`);
    }
    console.log(printArr.join("\n"));
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])