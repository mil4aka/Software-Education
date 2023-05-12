function factorialDivision (num1, num2) {

    let result = getFactorial(num1) / getFactorial(num2);
    console.log(result.toFixed(2));
    
    function getFactorial (x) {
        if (x == 0 || x == 1) {
            return 1
        } else {
            return x * getFactorial(x - 1)
        }
    }
}

factorialDivision(5, 2)
factorialDivision(6, 2)