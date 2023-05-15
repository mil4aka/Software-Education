function secretChat(input) {
    let commands = {
        ChangeAll,
        Reverse,
        InsertSpace
    }

    let text = input.shift();

    while (input[0] != "Reveal") {
        currLine = input.shift().split(":|:");

        let name = currLine[0];
        let p1 = currLine[1];
        let p2 = currLine[2];

        let command = commands[name];

        text = command(text, p1, p2)
    }
    console.log(`You have a new text message: ${text}`);

    function ChangeAll(text, charToSearch, replacement) {
        let result = text.split(charToSearch).join(replacement);
        console.log(result);
        return result;
    }
    
    function Reverse(text, stringToSearch) {
        let index = text.indexOf(stringToSearch);
    
        if (index != -1) {
            let left = text.slice(0, index);
            let right = text.slice(index + stringToSearch.length);
            let result = left + right + stringToSearch.split("").reverse().join("");
            console.log(result);
            return result;
        } else {
            console.log("error");
            return text;
        }
    }
    
    function InsertSpace(text, index) {
        let rightPart = text.slice(index);
        let leftpart = text.slice(0, index);
        text = leftpart + " " + rightPart;
        console.log(text);
        return text;
    }
}



// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'])

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])