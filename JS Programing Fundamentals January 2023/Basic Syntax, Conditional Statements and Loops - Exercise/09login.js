function login(input) {
    let index = 0;
    let username = input[index];
    let correctPass = "";
    let command = "";
    let tries = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        correctPass += username[i];
    }

    while (tries < 4) {
        index++;
        command = input[index];
        if (command == correctPass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
        tries++;
        if (tries >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
        }
    }
}