function accountBalance(input) {
    let index = 0;
    let sum = 0;
    let command = input[index];
    index++;

    while (command !== "NoMoreMoney") {
        if (command < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        sum += Number(command);
        console.log(`Increase: ${Number(command).toFixed(2)}`);
        command = input[index];
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}


accountBalance(["5.51", "69.42", "-15", "100", "NoMoreMoney"])
