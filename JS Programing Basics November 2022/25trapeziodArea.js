function trapeziodArea(input) {
    let index = 0;
    let a = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
    let h = Number(input[index]);

    let s = (a + b) * h / 2;

    console.log(s.toFixed(2));
}

trapeziodArea([8, 13, 7])