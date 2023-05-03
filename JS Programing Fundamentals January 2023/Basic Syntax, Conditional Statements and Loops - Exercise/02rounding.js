function rounding (num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let buff = num.toFixed(precision);
    let print = parseFloat(buff)
    console.log(print);
}