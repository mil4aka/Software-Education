function nByNMatrix (num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        let arr2 = [];
        for (let j = 1; j <= num; j++) {
            arr2.push(num);
        } 
        arr.push(arr2.join(" "));
    }
    console.log(arr.join("\n"));
}

nByNMatrix(3)
nByNMatrix(7)
nByNMatrix(2)