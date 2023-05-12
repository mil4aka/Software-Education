function palindromeIntegers(array) {
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let numToString = array[i].toString();
        let reversed = numToString.split("").reverse().join("")
    
        if (reversed == numToString) {
            console.log(true);
        } else {
            console.log(false);
        }


    }


}

palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32, 2, 232, 1010]);