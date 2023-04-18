function cake(input) {
    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    let totalPiecesInCake = cakeLength * cakeWidth;
    index++;
    let command = input[index];
    let piecesTaken = 0;

    while (true) {
        if (command != "STOP") {
            piecesTaken += Number(command);
            index++;
            command = input[index];
            if (piecesTaken > totalPiecesInCake) {
                console.log(`No more cake left! You need ${piecesTaken - totalPiecesInCake} pieces more.`);
                break;
            }
        } else if (command == "STOP") {
            console.log(`${totalPiecesInCake - piecesTaken} pieces are left.`);
            break;
        }
    }
}

cake([
    "10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])

// cake(["10",
// "2",
// "2",
// "4",
// "6",
// "STOP"])
