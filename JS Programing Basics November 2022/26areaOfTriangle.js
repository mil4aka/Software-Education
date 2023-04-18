function areaOfTriangle (input) {
    let index = 0;
    let a = Number(input[index]);
    index++;
    let h = Number(input[index]);
    let s = (a * h) / 2;
    console.log(s.toFixed(2));

}

areaOfTriangle([1.23456, 4.56789])