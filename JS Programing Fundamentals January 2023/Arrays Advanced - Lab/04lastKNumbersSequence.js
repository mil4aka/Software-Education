function lastKNumbers(n, k) {
    let resArr = [1];

    for (let i = 1; i < n; i++) {
        let sequenceK = resArr.slice(-k);
        let sum = 0;

        for (let el of sequenceK) {
            sum += el;
        }
        resArr.push(sum);
    }
    console.log(resArr.join(" "));
}


lastKNumbers(6, 3);
lastKNumbers(8, 2);