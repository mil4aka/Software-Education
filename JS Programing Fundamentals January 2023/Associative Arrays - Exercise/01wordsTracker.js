function wordsTracker(wordArr) {
    let wordsToLookFor = wordArr.shift().split(" ");
    let result = {};

    for (let word of wordsToLookFor) {
        result[word] = 0
    }
    for (let el of wordArr) {
        if (result.hasOwnProperty(el)) {
            result[el]++;
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

wordsTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you',
        'have', 'to', 'count', 'the', 'occurrences', 'of', 'the',
        'words', 'this', 'and', 'sentence', 'because', 'this',
        'is', 'your', 'task'
    ])

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])