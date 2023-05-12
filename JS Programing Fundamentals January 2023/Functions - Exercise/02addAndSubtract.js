function addAndSubtract(n1, n2, n3) {
    let sumFirstAndSecond = sumFirstTwo(n1, n2);
    let result = subtract(sumFirstAndSecond, n3); 
    console.log(result);
    
    function sumFirstTwo (n1, n2) {
        return n1 + n2;
    }
    function subtract(sumFirstAndSecond, n3) {
        return sumFirstAndSecond - n3;
    }
}

addAndSubtract(23,    6,    10   )