function building(input) {
    let index = 0;
    let stories = Number(input[index]);
    index++;
    let rooms = Number(input[index]);
    let buff = "";

    for (let i = stories; i > 0; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i === stories) {
                buff += `L${i}${j} `;
            } else if (i % 2 === 0) {
                buff += `O${i}${j} `;
            } else if (i % 2 != 0) {
                buff += `A${i}${j} `
            }
        }
        console.log(buff);
        buff = "";
    }
}

// building(["6", "4"])
building(["9", "5"])