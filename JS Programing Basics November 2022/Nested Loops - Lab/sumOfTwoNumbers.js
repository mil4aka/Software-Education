function sumOfTwoNumbers(input) {
    let index = 0;
    let intervalStart = Number(input[index]);
    index++;
    let intervalEnd = Number(input[index]);
    index++;
    let magicNumber = Number(input[index]);
    let combinationCount = 0;
    let magicNumberFound = false;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        for (let j = intervalStart; j <= intervalEnd; j++) {
            combinationCount++;
            if (i + j === magicNumber) {
                magicNumberFound = true;
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`);
                break;
            };
        };
        
        if (magicNumberFound == true) {
            break;
        };
    };

    if (magicNumberFound == false) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    };
};

sumOfTwoNumbers(["1", "10", "5"]);

// sumOfTwoNumbers(["23", "24", "20"]);

// sumOfTwoNumbers(["88", "888", "1000"]);

// sumOfTwoNumbers(["88", "888", "2000"]);


