function arrayManipulations (commands) {
    let arrToManipulate = commands.shift().split(" ").map(Number);

    for (let i = 0; i < commands.length; i++){
        let [command, firstNum, secondNum] = commands[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch(command) {
            case "Add": add(firstNum); break;
            case "Remove": remove(firstNum); break;
            case "RemoveAt": removeAt(firstNum); break;
            case "Insert": insert(firstNum, secondNum); break;
        }
    }
    console.log(arrToManipulate.join(" "));


        function add(el) {
            arrToManipulate.push(el)
        }
    
        function remove(num) {
            arrToManipulate = arrToManipulate.filter(el => el !== num)
        }
    
        function removeAt(index) {
            arrToManipulate.splice(index, 1)
        }
    
        function insert(num, index) {
            arrToManipulate.splice(index, 0, num)
        }
}

// arrayManipulations(['4 19 2 53 6 43',
// 'Add 3',
// 'Remove 2',
// 'RemoveAt 1',
// 'Insert 8 3'])

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)