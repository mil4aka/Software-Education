function addAndSubtract (inputArray) {
    let sumOriginal = 0;
    let sumModified = 0;
    let newArray = [];
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        sumOriginal += Number(inputArray[i]);
    
        inputArray[i] % 2 == 0 ? inputArray[i] += i : inputArray[i] -= i;

        sumModified += Number(inputArray[i]);
        newArray.push(inputArray[i])
    }
    console.log(newArray);
    console.log(sumOriginal);
    console.log(sumModified);
}

addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])