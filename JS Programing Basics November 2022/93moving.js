function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let command = input[index];
    let totalSpaceInHouse = width * height * length;
    let totalBoxes = 0;

    while (true) {
        command = input[index]
        if (command == "Done") {
            if (totalSpaceInHouse >= totalBoxes) {
                console.log(`${totalSpaceInHouse - totalBoxes} Cubic meters left.`);
                break;
            }
        } else if (command != "Done") {
            totalBoxes += Number(command);
            index++;
        }
        if (totalBoxes > totalSpaceInHouse) {
            console.log(`No more free space! You need ${totalBoxes - totalSpaceInHouse} Cubic meters more.`);
            break;
        }
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

// moving(["10", 
// "1",
// "2",
// "4", 
// "6",
// "Done"])
