function numbers(sequence) {
    let workSeq = sequence.split(" ").map(Number);
    let sum = 0;
    for (let el of workSeq) {
        sum += el;
    }
    let avg = sum / workSeq.length;

    let filtered = workSeq.filter(x => x > avg);
    filtered.sort((a, b) => b - a);

    if (filtered.length > 0) {
        console.log(filtered.splice(0, 5).join(" "));
    } else {
        console.log("No");
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6') 