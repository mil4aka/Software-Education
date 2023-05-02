function companyUsers(input) {
    let companies = {};
    for (let line of input) {
        let [company, employeeID] = line.split(" -> ")
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(employeeID);
    }
    let entries = Object.entries(companies);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, employees] of entries) {
        console.log(`${company}`);
        employees.forEach(empl => { console.log(`--${empl}`) });
    }
}
    companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ])

    companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ])