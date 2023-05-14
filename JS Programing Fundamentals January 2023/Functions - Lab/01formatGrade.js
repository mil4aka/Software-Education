function formatGrade(grade) {
    let desc;
    let formatedGrade = grade.toFixed(2);

    if (grade < 3) {
        desc = "Fail";
        formatedGrade = 2;
    } else if (grade < 3.50) {
        desc = "Poor";
    } else if (grade < 4.50) {
        desc = "Good";
    } else if (grade < 5.50) {
        desc = "Very good";
    } else if (grade < 6) {
        desc = "Excellent"
    }
    console.log(`${desc} (${formatedGrade})`);
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);