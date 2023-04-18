function characterSequence (input) {
    let text = input[0];
    let length = text.length; // vzimame duljinata na teksta

    for (let i = 0; i < length; i += 1) { // zadavame nachaloto; da se izpulnqva ako e po malko ot duljinata na teksta;
        let letter = text[i]; //dobavqme 1 za da vzemem sledvashitq simvol v masiva
        console.log(letter);
    }

}

characterSequence(["Milcho"])