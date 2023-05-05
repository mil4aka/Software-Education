function sumOfOddNumbers(num) {
    let sum = 0;
    let printedNums = 0;
    let currNum = 1;

    for (let i = 1; i <= num; i++) {
        console.log(currNum);
        sum += currNum;
        currNum += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)