function multiplicationTable(input) {
    let inp = Number(input[0]);
    let buff = "";

    for (let i = 1; i <= 10; i++) {
        switch (i) {
            case 1: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 2: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 3: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 4: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 5: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 6: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 7: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 8: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 9: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            case 10: buff += `${i} * ${inp} = ${i * inp}` + "\n"; break;
            default: break;

        }
    }
    
    console.log(buff); 

}

multiplicationTable(["5"]);

