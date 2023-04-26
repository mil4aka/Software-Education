function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;
    while (command !== "Stop") {
        let currentNum = Number(command);
        command = input[index];
        index++;

        if (minNum > currentNum) {
            minNum = currentNum;
        };
    };
    console.log(minNum);
};

minNumber(["-1",
    "-2",
    "Stop"]);
