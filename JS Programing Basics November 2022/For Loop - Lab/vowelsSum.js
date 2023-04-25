function vowelsSum(input) {
    let text = input[0];
    let sum = 0;

    for (let symbol = 0; symbol < text.length; symbol += 1) {
        let ch = text[symbol];
        switch (ch) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
            default: sum += 0; break;
        };
    };
    console.log(sum);
}

vowelsSum(["hello"]);