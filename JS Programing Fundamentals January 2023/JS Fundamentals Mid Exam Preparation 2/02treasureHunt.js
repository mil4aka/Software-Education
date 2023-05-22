function treasureHunt(arr) {
    let workArr = arr.slice();
    let initialLoot = workArr.shift().split("|");
    let length = 0;

    let index = 0;
    let currCommand = workArr[index];
    while (currCommand !== "Yohoho!") {
        let splitted = currCommand.split(" ");
        let operation = splitted.shift();

        switch (operation) {
            case "Loot":
                for (let el of splitted) {
                    if (!initialLoot.includes(el)) {
                        initialLoot.unshift(el);
                    }
                }
                break;
            case "Drop":
                let indexToDrop = Number(splitted);
                if ((indexToDrop <= initialLoot.length - 1) && indexToDrop > 0) {
                    let spliced = initialLoot.splice(indexToDrop, 1)
                    initialLoot.push(spliced.join(" ")); 
                }
                break;
            case "Steal":
                let popped = initialLoot.splice(initialLoot.length - Number(splitted))
                console.log(popped.join(", "));
                break;
        }
        index++;
        currCommand = workArr[index];
    }

    for (let el of initialLoot) {
        length += Number(el.length);
    }

    if (initialLoot.length <= 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        console.log(`Average treasure gain: ${(length / (initialLoot.length)).toFixed(2)} pirate credits.`);
    }
}

// treasureHunt(
//     ["Gold|Silver|Bronze|Medallion|Cup",
//         "Loot Wood Gold Coins",
//         "Loot Silver Pistol",
//         "Drop 3",
//         "Steal 3",
//         "Yohoho!"]
// )

treasureHunt(
    ["Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 6",
        "Yohoho!"])

// treasureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"])

// treasureHunt([
// "Yohoho!"])