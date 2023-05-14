function simpleCalc(num1, num2, operator) {
    let res;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    switch (operator) {
        case "multiply": res = multiply(num1, num2); break;
        case "divide": res = divide(num1, num2); break;
        case "add": res = add(num1, num2); break;
        case "subtract": res = subtract(num1, num2); break;
    }
    console.log(res);
}

simpleCalc(5, 5, 'multiply')
