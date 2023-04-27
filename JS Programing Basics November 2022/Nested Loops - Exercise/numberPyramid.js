function numberPyramid(input) {
    let index = 0;
    let num = input[index];
    let currNum = 1;
    let currLine = "";
    let isBigger = false;

    for (let rows = 1; rows <= num; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (currNum > num) {
                isBigger = true;
                break;
            };
            currLine += `${currNum} `;
            currNum++;
        };
        console.log(currLine);
        currLine = "";
        if (isBigger == true) {
            break;
        };
    };
};

numberPyramid(["7"]);