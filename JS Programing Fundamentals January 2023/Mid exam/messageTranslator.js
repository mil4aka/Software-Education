function messagetranslator(input) {
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>\w{8,})\]/g;
    let countInputs = Number(input.shift());
    
    while (countInputs > 0) {
        let currLine = input.shift();
        let matches = pattern.exec(currLine);
        if (matches == null){
            console.log(`The message is invalid`);
        } else {
            let temp = matches.groups.message;
            let arr = [];
            for (let el of temp) {
                el = el.charCodeAt();
                arr.push(el);
            }
            console.log(`${matches.groups.command}: ${arr.join(" ")}`);
        }
        countInputs--
    }
}

// messagetranslator(["2",
// "!Send!:[IvanisHere]",
// "*Time@:[Itis5amAlready"])

messagetranslator(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
