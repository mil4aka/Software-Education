
function bombNumbers(sequenceArray, bombArray) {
    let workSequenceArray = sequenceArray.slice(0);
    let sum = 0;

    for (let i = 0; i < sequenceArray.length; i++) {
        if (workSequenceArray[i] === bombArray[0]) {
            if ((i - bombArray[1]) < 0) {
                workSequenceArray.splice(0, (bombArray[1] * 2 + 1 - (bombArray[1] - i)));
            } else if (i === workSequenceArray.length - 1) {
                workSequenceArray.splice((i - bombArray[1]), bombArray[1] + 1);
            } else {
                workSequenceArray.splice((i - bombArray[1]), (bombArray[1] * 2 + 1));
                if (workSequenceArray.includes(bombArray[0])) {
                    i = 0;
                }
            }
        }
    }

    for (let el of workSequenceArray){
        sum += Number(el);
    }
    console.log(sum);
}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)

    bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
        [2, 1]
        )