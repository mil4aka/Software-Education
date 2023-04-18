function cToF (input) {
    let index = 0;
    let c = Number(input[index]);
    let f = (c * 1.8) + 32
    console.log(f.toFixed(2));

}

cToF([32.3])