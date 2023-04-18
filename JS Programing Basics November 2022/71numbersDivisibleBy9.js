function numbersDivisibleBy9 (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let buffer = "";

    for (let i = num1; i <= num2; i += 1){
        if (i % 9 == 0 ) { // pravim for cikul za da proverim sumata purvo
            sum += i;
            buffer += i + "\n"; // "\n" kara console da pechata vsqko na sledvasht red
        }
    }
    console.log(`The sum: ${sum}`); // pechatame sumata ot for cikula
    console.log(buffer); //pechatame chislata edno pod drugo na nov red
    
}

numbersDivisibleBy9(["100", "200"])