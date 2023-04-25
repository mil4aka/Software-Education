function characterSequence(input) {
    let text = input[0];
    let length = text.length;

    for (let i = 0; i < length; i += 1) {
        let letter = text[i];
        console.log(letter);
    };
}

characterSequence(["Milcho"]);