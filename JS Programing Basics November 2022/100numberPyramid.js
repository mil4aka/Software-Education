function numberPyramid(input) {
    let index = 0;
    let num = input[index];
    let currNum = 1;
    let currLine = "";
    let isBigger = false;

    for (let rows = 1; rows <= num; rows++) { //opredelq kolko reda shte se pechatat
        for (let columns = 1; columns <= rows; columns++) { //opredelq kolko chisla na vseki red shte ima
            if (currNum > num) {                            // zadavame mu da sravni vutresniq cikul s vunshniq
                                                    // taka na 3ti red shte ima 3 chisla, na 4ti - 4 i t.n.
                isBigger = true;
                break;
            }
            currLine += `${currNum} `;
            currNum++;
        }
        console.log(currLine);
        currLine = "";
        if (isBigger == true) {
            break;
        }
    }
}

numberPyramid(["7"])