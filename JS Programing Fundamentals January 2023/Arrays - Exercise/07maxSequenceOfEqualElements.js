function maxSequence(array) {
    let biggestSeq = [];
    let arrayLength = array.length;
    let bestStreak = 1;
    let currentStreak = 1;
    let number = 0;

    for (let i = 0; i < arrayLength; i++) {
        if ([i + 1] >= arrayLength) {
            break;
        }

        if (array[i] == array[i + 1]) {
            currentStreak++;
        }
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            number = array[i];
        }

        if (array[i] != array[i + 1]){
            currentStreak = 1;
        }
    }
    for (let j = 0; j < bestStreak; j++) {
        biggestSeq.push(number)
    }
    console.log(biggestSeq.join(" "));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])