function examPreparation(input) {
    let index = 0;
    let badGrades = Number(input[index]);
    index++;
    let nameOfTask = input[index];
    index++;
    let grade = Number(input[index]);
    let badGradesCounter = 0;
    let tasksSolved = 0;
    let gradesSum = 0;
    let lastTaskname = "";

    while (true) {
        if (nameOfTask == "Enough") {
            console.log(`Average score: ${(gradesSum / tasksSolved).toFixed(2)}`);
            console.log(`Number of problems: ${tasksSolved}`);
            console.log(`Last problem: ${lastTaskname}`);
            break;
        } else {
            lastTaskname = nameOfTask;
            grade = Number(input[index]);
            index++;
            nameOfTask = input[index];
            index++;
            tasksSolved++;
        };

        gradesSum += grade;

        if (grade <= 4) {
            badGradesCounter++;
        };

        if (badGradesCounter >= badGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        };
    };
};

examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);

// examPreparation([
//     "2",
//     "Income",
//     "3",
//     "Game Info",
//     "6",
//     "Best Player",
//     "4"
// ]);
