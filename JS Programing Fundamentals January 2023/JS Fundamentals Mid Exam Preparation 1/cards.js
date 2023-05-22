function cards(input) {
    let currCards = input.shift().split(", ");
    let numberOfCommands = input.shift();
    numberOfCommands = Number(numberOfCommands);

    while (numberOfCommands > 0) {
        let currComm = input.shift().split(", ");

        switch (currComm[0]) {
            case "Add":
                if (currCards.includes(currComm[1])) {
                    console.log(`Card is already in the deck`);
                } else {
                    currCards.push(currComm[1]);
                    console.log(`Card successfully added`);
                }
                numberOfCommands--;
                break;
            case "Remove":
                if (currCards.includes(currComm[1])) {
                    currCards.splice(currCards.indexOf(currComm[1]), 1)
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);
                }
                numberOfCommands--;
                break;
            case "Remove At":
                let indexToRemoveAt = Number(currComm[1]);
                if (indexToRemoveAt > currCards.length - 1 || indexToRemoveAt < 0) {
                    console.log(`Index out of range`);
                } else {
                    currCards.splice(indexToRemoveAt, 1)
                    console.log(`Card successfully removed`);
                }
                numberOfCommands--;
                break;
            case "Insert":
                let indexToInsertAt = Number(currComm[1]);
                if (indexToInsertAt > currCards.length || indexToInsertAt < 0) {
                    console.log("Index out of range");
                } else {
                    if (currCards.includes(currComm[2])) {
                        console.log(`Card is already added`);
                    } else {
                        currCards.splice(currComm[1], 0, currComm[2]);
                        console.log(`Card successfully added`);
                    }
                }
                numberOfCommands--;
                break;
        }
    }
    console.log(currCards.join(", "));
}

// cards(
//     ["Ace of Diamonds, Queen of Hearts, King of Clubs",
//         "3",
//         "Add, King of Diamonds",
//         "Insert, 2, Jack of Spades",
//         "Remove, Ace of Diamonds"])


// cards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
//     "2",
//     "Add, Two of Clubs",
//     "Remove, Five of Hearts"])


cards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])

