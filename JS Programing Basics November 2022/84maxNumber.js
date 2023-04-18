function maxNumber(input) {
    let index = 0;
    let command = (input[index]);
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER; //zadavame mu da zapochne ot dunoto
    while(command !== "Stop") {
        let currentNum = Number(command);
        command = input[index];
        index++;

        if (maxNum < currentNum) { // samo podmenq chislata taka che maxNum da e vinagi nai golqmoto
            maxNum = currentNum
        } 
    }
    console.log(maxNum);
}

// maxNumber(["100",
// "99",
// "80",
// "70",
// "954654684",
// "Stop"])

maxNumber (["-1", "-5", "-2", "Stop"])
