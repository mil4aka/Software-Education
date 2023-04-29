function firstAndLastNumbers(array) {
    let elementsToPrint = array.shift();
    let firstPrint = array.slice(0, elementsToPrint);
    let lastPrint = array.slice(-elementsToPrint)
    console.log(firstPrint.join(" "));
    console.log(lastPrint.join(" "));
}

firstAndLastNumbers([2, 7, 8, 9]);
firstAndLastNumbers([3, 6, 7, 8, 9]);
