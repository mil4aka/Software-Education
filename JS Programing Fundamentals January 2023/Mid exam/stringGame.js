function stringgame(input) {
    let text = input.shift();
    let currComm = input.shift().split(" ");

    while (currComm != "Done") {
        switch (currComm[0]) {
            case "Change":
                text = text.split(currComm[1]).join(currComm[2]);
                console.log(text);
                break;
            case "Includes":
                let result = text.includes(currComm[1]);
                if (result) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                let substrL = currComm[1].length;
                let spl = text.slice(-substrL);
                if (currComm[1] == spl) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                let temp = []
                for (let el of text) {
                    el = el.toUpperCase()
                    temp.push(el);
                }
                text = temp.join("");
                console.log(text);
                break;
            case "FindIndex":
                let res = text.indexOf(currComm[1]);
                console.log(res);
                break;
            case "Cut":
                let toPrint = text.slice(Number(currComm[1]), Number(currComm[1]) + Number(currComm[2]))
                console.log(toPrint);
                break;
        }
        currComm = input.shift().split(" ");
    }
}

// stringgame(["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"])

stringgame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
