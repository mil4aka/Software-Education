function triples(num) {
    let letter = "";
    for (let i = 0; i < num; i++) {
        letter = "";
        letter += String.fromCharCode(97 + i)
        for (let j = 0; j < num; j++) {
            letter = "";
            letter += String.fromCharCode(97 + i)
            letter += String.fromCharCode(97 + j)
            for (let k = 0; k < num; k++) {
                letter += String.fromCharCode(97 + k);
                console.log(letter);
                letter = "";
                letter += String.fromCharCode(97 + i)
                letter += String.fromCharCode(97 + j)
            }
        }
    }
}
triples(3)