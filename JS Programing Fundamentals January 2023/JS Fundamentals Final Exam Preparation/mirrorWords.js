function mirrorWords(input) {
    let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
    let validMatches = new Map();
    let regexMatches = [];
    let match = pattern.exec(input[0]);

    while (match != null) {
        let wordOne = match.groups.wordOne;
        regexMatches.push(wordOne);

        let wordTwo = match.groups.wordTwo;
        regexMatches.push(wordTwo);

        match = pattern.exec(input);
    }

    let regexMatchesL = regexMatches.length
    for (let i = 0; i < regexMatchesL; i += 2) {
        let reversed = regexMatches[i].split("").reverse().join("");
        if (reversed == regexMatches[i + 1]) {
            validMatches.set(regexMatches[i], reversed);
        }
    }
    if (regexMatches.length == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${(regexMatches.length) / 2} word pairs found!`);
    }
    
    if (validMatches.size == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        
        let arr = [];
        for (let [key, value] of validMatches.entries()) {
            let pairs = `${key} <=> ${value}`;
            arr.push(pairs);
        }
        console.log(arr.join(", "));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);