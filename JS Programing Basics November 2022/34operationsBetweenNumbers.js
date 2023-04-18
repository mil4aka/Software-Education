function operationBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let type = ""

    if (operator == "+") {
        result = n1 + n2;
    } else if (operator == "-") {
        result = n1 - n2;
    } else if (operator == "*") {
        result = n1 * n2;
    } else if (operator == "/" && n2 != 0) {
        result = (n1 / n2).toFixed(2);
    } else if (operator == "%" && n2 != 0) {
        result = n1 % n2;
    }
    if (result % 2 == 0) {
        type = "even";
    } else if (result % 2 != 0) {
        type = "odd";
    }

    if (n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
    }

    if (operator == "+" || operator == "-" || operator == "*") {
        console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
    } else if (operator == "/" && n2 != 0) {
        console.log(`${n1} / ${n2} = ${result}`);
    } else if (operator == "%" && n2 != 0) {
        console.log(`${n1} % ${n2} = ${result}`);
    }
}

// operationBetweenNumbers(["10","12","+"]);
// operationBetweenNumbers(["123","12","/"]);
// operationBetweenNumbers(["112","0","/"]);
// operationBetweenNumbers(["10","1","-"]);
// operationBetweenNumbers(["10","3","%"]);
// operationBetweenNumbers(["10","0","%"]);
// operationBetweenNumbers(["7","3","*"]);
operationBetweenNumbers(["556", "565", "-"]);



