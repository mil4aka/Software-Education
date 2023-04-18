function travelling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneySaved = 0;
    let isEnd = false;

    while (destination !== "End") {
        while (moneyNeeded > moneySaved) {
            let command = input[index];
            if (command !== "End") {
                command = Number(input[index]);
            } else {
                isEnd = true;
                break;
            }
            index++;
            moneySaved += command;
        }

        if (isEnd) {
            break;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;
        moneyNeeded = Number(input[index]);
        index++;
        moneySaved = 0;
    }
}

    // travelling([
    //     "Greece",
    //     "1000",
    //     "200",
    //     "200",
    //     "300",
    //     "100",
    //     "150",
    //     "240",
    //     "Spain",
    //     "1200",
    //     "300",
    //     "500",
    //     "193",
    //     "423",
    //     "End"
    // ])

travelling([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
])
