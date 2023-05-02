function schoolGrades(arr) {
    let students = new Map();

    for (let el of arr) {
        let grades = el.split(" ");
        let studentName = grades.shift();
        grades.map(Number);

        if (students.has(studentName)) {
            let toModify = students.get(studentName);
            for (let el of grades) {
                toModify.push(el);
            }
        } else {
            students.set(studentName, grades);
        }
    }
    let sorted = Array.from(students.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    
    for ([currName, grades] of sorted) {
        let sum = 0;
        for (let grade of grades) {
            sum += Number(grade);
        }
        console.log(`${currName}: ${(sum / grades.length).toFixed(2)}`);
    }
}

// schoolGrades(
//     ['Lilly 4 6 6 5',
//         'Tim 5 6',
//         'Tammy 2 4 3',
//         'Tim 6 6']
// );

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)