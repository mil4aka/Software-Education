function sequence2k(input) {
    let num = Number(input[0]);
    let buff = 1;

    while (buff <= num) {
        console.log(buff);
        buff = buff * 2 + 1;
    };
};

sequence2k(["31"]);