function employees(arr) {
    class Employee {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    }
    for (let el of arr) {
        let personalNum = el.length;
        let employeeName = el;
        let person = new Employee(employeeName, personalNum);
        console.log(`Name: ${person.employeeName} -- Personal Number: ${person.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])