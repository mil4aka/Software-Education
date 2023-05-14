function signCheck(num1, num2, num3) {
    let countNegative = 0;

    if (num1 >= 0) {
        countNegative++;
    }
    if (num2 >= 0) {
        countNegative++;
    }
    if (num3 >= 0) {
        countNegative++;
    }

    countNegative % 2 != 0 ? console.log("Positive") : console.log("Negative");
}


signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)