function equalSumsEvenOddPosition (input) {
    let index = 0;
    let startingNum = input[index];
    index++;
    let endNum = input[index];
    let numToPrint = "";
    
    for (let i = startingNum; i <= endNum; i++) {
        let sumEvenBuff = 0;
        let sumOddBuff = 0;
        let currNum = String(i); 
        for (let j = 0; j < currNum.length; j++) {
            let currDigit = Number(currNum[j]);
            if (j % 2 == 0) {
                sumEvenBuff += currDigit;
            } else if (j % 2 != 0) {
                sumOddBuff += currDigit;
            };

            if (sumEvenBuff == sumOddBuff && j == 5) {
                let savedNum = `${i} `;
                numToPrint += savedNum;
            };
        };
    };
    console.log(numToPrint);
};

equalSumsEvenOddPosition(["100000",
"100050"]);

equalSumsEvenOddPosition(["100115",
"100120"]);
