function pwdGuess (input) {
    let inputOfPassword = input[0];
    let realPassword = "s3cr3t!P@ssw0rd";

    if (inputOfPassword === realPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

pwdGuess(["qwerty"]);
pwdGuess(["s3cr3t!P@ssw0rd"]);