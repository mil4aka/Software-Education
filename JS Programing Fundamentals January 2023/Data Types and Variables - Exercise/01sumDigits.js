function sumDigits(num) {
    let numAsString = String(num);
    let sum = 0;

    for (let char of numAsString) { 
        sum += Number(char);
    }
    console.log(sum);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)