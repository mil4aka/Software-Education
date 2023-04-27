function trainTheTrainers(input) {
    let index = 0;
    let jurieCount = input[index];
    let command = "";
    let presentationName = "";
    let sumGrade = 0;
    let avgGradeCurrPresentation = 0;
    let avgGradeTotalSum = 0;
    let presentationCounter = 0;
    index++;
    command = input[index];

    while (command != "Finish") {
        presentationName = input[index];
        presentationCounter++;

        for (let i = 1; i <= jurieCount; i++) {
            index++;
            command = input[index];
            sumGrade += Number(command);
        };

        avgGradeCurrPresentation = sumGrade / jurieCount;
        avgGradeTotalSum += avgGradeCurrPresentation;
        console.log(`${presentationName} - ${(avgGradeCurrPresentation).toFixed(2)}.`);
        sumGrade = 0;

        index++;
        command = input[index];
    };
    console.log(`Student's final assessment is ${(avgGradeTotalSum / presentationCounter).toFixed(2)}.`);
};

// trainTheTrainers([
//     "2",
//     "While-Loop",
//     "6.00",
//     "5.50",
//     "For-Loop",
//     "5.84",
//     "5.66",
//     "Finish"]);

// trainTheTrainers(["3",
//     "Arrays",
//     "4.53",
//     "5.23",
//     "5.00",
//     "Lists",
//     "5.83",
//     "6.00",
//     "5.42",
//     "Finish"]);

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"]);
