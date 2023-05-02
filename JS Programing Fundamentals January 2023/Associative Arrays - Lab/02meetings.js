function meetings(input) {
    let resObj = {};

    for (let line of input) {
        let [day, person] = line.split(" ");
        if (resObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            resObj[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in resObj) {
        console.log(`${day} -> ${resObj[day]}`);
    }
}

meetings(
    ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)