function multiplicationTable(input) {
    let inp = Number(input[0]);
    let buff = "";

    for (let i = 1; i <= 10; i++) {
        switch (i) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: buff += `${i} * ${inp} = ${i * inp}` + "\n";
                break;
        };
    };
    console.log(buff);
};

multiplicationTable(["5"]);

