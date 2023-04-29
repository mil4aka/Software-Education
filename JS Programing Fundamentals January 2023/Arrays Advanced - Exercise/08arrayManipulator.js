function arrayManipulator(numsArr, commandsArr) {
    let workNumsArr = numsArr.slice();
    let workCommandsArr = commandsArr.slice();
    let workCommandsArrL = workCommandsArr.length

    for (let i = 0; i < workCommandsArrL; i++) {
        let spreadCommands = workCommandsArr.shift().split(" ");

        switch (spreadCommands[0]) {
            case "add":
                workNumsArr.splice(Number(spreadCommands[1]), 0, Number(spreadCommands[2]));
                break;
            case "addMany":
                let currCommand = spreadCommands.shift();
                let indexToAddAt = spreadCommands.shift();
                let toNums = spreadCommands.map(Number);
                for (let i = toNums.length - 1; i >= 0; i--) {
                    workNumsArr.splice(indexToAddAt, 0, toNums[i]);
                }
                break;
            case "contains":
                console.log(workNumsArr.indexOf(Number(spreadCommands[1])));
                break;
            case "remove":
                workNumsArr.splice(spreadCommands[1], 1);
                break;
            case "shift":
                for (let i = 0; i < spreadCommands[1]; i++) {
                    let shifted = workNumsArr.shift();
                    workNumsArr.push(shifted);
                }
                break;
            case "sumPairs": sumPairs(); break;
            case "print": printArr(); break;
        }
    }
    function sumPairs() {
        let workNumsArrL = workNumsArr.length;
        let newArr = [];
        for (let i = 0; i < workNumsArrL; i += 2) {
            let sum = 0;
            let elToSum = workNumsArr.slice(i, i + 2);
            for (let el of elToSum) {
                sum += Number(el);
            }
            newArr.push(sum)
        }
        let oldWorkNumsArr = workNumsArr.slice();
        workNumsArr = newArr.slice();
        return workNumsArr
    }
    function printArr() {
        console.log(`[ ${workNumsArr.join(", ")} ]`);
    }
}

// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )

// arrayManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
//     )

arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
)