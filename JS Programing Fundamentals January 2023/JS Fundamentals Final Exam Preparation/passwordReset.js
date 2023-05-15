function passwordReset(input) {
    let text = input.shift();
    let command = input.shift().split(" ");

    let commands = {
        TakeOdd,
        Cut,
        Substitute
    }

    while(command != "Done") {
        let commName = command[0];
        let p1 = command[1];
        let p2 = command[2];

        text = commands[commName](text, p1, p2);
        
        command = input.shift().split(" ");
    }
    console.log(`Your password is: ${text}`);

    function TakeOdd(text) {
        let textL = text.length;
        let modifiedText = [];
        for (let i = 0; i< textL; i++) {
            if (i % 2 == 1){
                modifiedText.push(text[i]);
            }  
        }
        text = modifiedText.join("");
        console.log(text);
        return text
    }

    function Cut(text, index, length) {
        let left = text.slice(0, Number(index));
        let right = text.slice(Number(index) + Number(length));
        text = left + right;
        console.log(text);
        return text;
    }

    function Substitute(text, substring, replacement) {
        if(text.includes(substring)) {
            let result = text.split(substring).join(replacement);
            console.log(result);
            return result;
        } else {
            console.log(`Nothing to replace!`);
            return text;
        }
    }
}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]);

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
