function invalidNumber (input) {
    let num = Number(input[0]);
    let num2 = num === 0 || (num >= 100 && num <= 200);
    if (num2 != true) {
        console.log("invalid");
    }

}

// invalidNumber([75]);
invalidNumber([0]);
// invalidNumber([220]);