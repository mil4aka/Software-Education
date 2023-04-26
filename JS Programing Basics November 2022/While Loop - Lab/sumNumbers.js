function sumNumbers(input) {
    let index = 0;
    let startingNumber = Number(input[index]);
    index++
    let buffer = Number(input[index]);
    let numbCount = 0;

    while (buffer != startingNumber) {
        buffer = Number(input[index]);
        index++;
        numbCount += buffer;

        if (numbCount >= startingNumber) {
            break;
        };
    };
    console.log(numbCount);
};

// sumNumbers(["100","10","20","30","40"])
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])

