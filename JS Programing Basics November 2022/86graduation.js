function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    let schoolClass = index;
    let avgGrade = grade;
    let totalGrades = 0;
    let expelled = 0;
    let isExpelled = false;

    while (schoolClass <= 12) {
        if (grade < 4) {
            expelled++;
            index++;
            grade = Number(input[index]);
            if (expelled > 1) {
                isExpelled = true;
                console.log(`${name} has been excluded at ${schoolClass} grade`);
                break;
            }
            continue;
        }
        totalGrades += grade
        avgGrade = totalGrades / schoolClass;
        index++;
        grade = Number(input[index]);
        schoolClass = index;
    }
    if (!isExpelled) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

// graduation(["Mimi", 
// "5",
// "6",
// "5",
// "6",
// "5",
// "6",
// "6",
// "2",
// "3"])


