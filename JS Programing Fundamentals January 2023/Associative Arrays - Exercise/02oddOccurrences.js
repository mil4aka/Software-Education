function oddOccurrances (input) {
    input = input.split(" ")
    let words = {};
    for (let word of input) {
        word = word.toLocaleLowerCase();
        if (words.hasOwnProperty(word)) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    let entries = Object.entries(words)
                        .filter(x => x[1] % 2 != 0)
                        .map(entry => entry[0]);

    console.log(entries.join(" ")); 
}

oddOccurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// oddOccurrances(['Cake IS SWEET is Soft CAKE sweet Food'])