function areaOfFigures(input) {
    let a = Number(input[1]);
    let b = Number(input[2]);

    let result = 0;
    if (input[0] == "square") {
        result = (a * a).toFixed(3);
    } else if (input[0] == "rectangle") {
        result = (a * b).toFixed(3);
    } else if (input[0] == "circle") {
        result = ((Math.PI * Math.pow(a, 2)).toFixed(3));
    } else if (input[0] == "triangle") {
        result = ((a * b) / 2).toFixed(3);
    }
    console.log(result);
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);