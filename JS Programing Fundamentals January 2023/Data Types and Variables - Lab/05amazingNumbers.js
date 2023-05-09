function amazingNumbers (num) {
    num = String(num);
    let buff = 0;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        buff = num[i];
        sum += Number(buff);
    } 
    sum % 10 == 9 ? num += " Amazing? True" : num += " Amazing? False"
    console.log(num);
}

amazingNumbers(1233)
amazingNumbers(999)