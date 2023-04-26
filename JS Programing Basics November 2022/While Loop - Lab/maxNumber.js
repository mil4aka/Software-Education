function maxNumber(input) {
    let index = 0;
    let command = (input[index]);
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER; //start from the lowest possible num
    while (command !== "Stop") {
        let currentNum = Number(command);
        command = input[index];
        index++;

        if (maxNum < currentNum) { //replace with current biggest num;
            maxNum = currentNum
        };
    };
    console.log(maxNum);
};

// maxNumber(["100",
// "99",
// "80",
// "70",
// "954654684",
// "Stop"]);

maxNumber(["-1", "-5", "-2", "Stop"]);
