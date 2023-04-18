function histogram(input) {
    let inputCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let i = 1; i <= inputCount; i++) {
        let buff = Number(input[i])
        if (buff <= 199) {
            p1++;
        } else if (buff >= 200 && buff <= 399) {
            p2++;
        } else if (buff >= 400 && buff <= 599) {
            p3++
        } else if (buff >= 600 && buff <= 799) {
            p4++;
        } else if (buff >= 800) {
            p5++;
        }
    }


    console.log(`${(p1 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / inputCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / inputCount * 100).toFixed(2)}%`);
}


histogram(["3", "1", "2", "999"]);
