function train(commands) {
    let commandsCopy = commands.slice(0);
    let wagons = commandsCopy.shift().split(" ").map(Number);
    let capacity = commandsCopy.shift().split(" ").map(Number);
    let leftCommandsL = commandsCopy.length;
    let wagonsL = wagons.length;

    for (let i = 0; i < leftCommandsL; i++) {
        if (commandsCopy[i].includes("Add")) {
            let [wagonToAdd, passengers] = commandsCopy[i].split(" ");
            wagons.push(Number(passengers));
        } else {
            for (let j = 0; j < wagonsL; j++) {

                if (Number(wagons[j]) + Number(commandsCopy[i]) <= capacity) {
                    wagons.splice(j, 1, (Number(wagons[j]) + Number(commandsCopy[i])));
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

// train(['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75'])

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)