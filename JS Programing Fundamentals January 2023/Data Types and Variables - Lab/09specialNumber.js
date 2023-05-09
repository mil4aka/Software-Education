function specialNumbers (num) {
    num = String(num);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        i = String(i);
        sum = 0;
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]) 
        }
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
// specialNumbers(15)
specialNumbers(20)