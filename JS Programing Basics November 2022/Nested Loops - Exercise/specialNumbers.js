function specialNumbers(input) {
    let index = 0;
    let command = input[index];
    let isMagic = false;
    let buff = "";

    for (let num = 1111; num <= 9999; num++) {
        let currNum = num + "";
        for (let j = 0; j <= 3; j++) {
            let currDigit = Number(currNum.charAt(j));
            if (command % currDigit == 0) {
                isMagic = true;
                continue;
            } else {
                isMagic = false;
                break;
            };
        };
        if (isMagic == true) {
            buff += `${num} `
        };
    };
    console.log(buff);
}

specialNumbers(["16"]);