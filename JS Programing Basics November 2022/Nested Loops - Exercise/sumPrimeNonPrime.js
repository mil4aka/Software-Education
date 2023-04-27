function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;
    while (command != "stop") {
        if (command < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        } else {
            let isPrime = true;

            // to see if a number is prime or not, you have to % divide the number until the number minus one;
            // if there is remainder left in any of the steps when dividing, the number is NOT prime;

            for (let i = 2; i < command; i++) {
                if (command % i == 0) {
                    sumNonPrime += Number(command);
                    isPrime = false;
                    break;
                };
            };

            if (isPrime == true) {
                sumPrime += Number(command);
            };
        };
        index++;
        command = input[index];
    };
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
};

// sumPrimeNonPrime(["3",
//     "9",
//     "0",
//     "7",
//     "19",
//     "4",
//     "stop"]);

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);

// sumPrimeNonPrime(["0",
// "-9",
// "0",
// "stop"]);
