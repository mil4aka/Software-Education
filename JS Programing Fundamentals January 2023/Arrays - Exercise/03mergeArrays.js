function mergeArrays(inputArr1, inputArr2) {
    let modifiedArr = [];
    let inputArr1Length = inputArr1.length;
    for (let i = 0; i < inputArr1Length; i++) {
        if (i % 2 == 0) {
            modifiedArr.push(Number(inputArr1[i]) + Number(inputArr2[i]))
        } else {
            modifiedArr.push(`${inputArr1[i]}${inputArr2[i]}`)
        }
    }
    console.log(modifiedArr.join(" - "));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)