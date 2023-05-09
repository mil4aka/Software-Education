function rightPlace (wordToChange, symbol, wordToCompare) {
    let buff = "";
    for (let i = 0; i < wordToChange.length; i++) {
        let command = wordToChange[i];
        if (command == "_") {
            command = symbol;
        }
        buff += command;
    }
    if (buff == wordToCompare) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')