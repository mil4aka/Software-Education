function readingPerDay (input) {
    let pagesInBook = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysToReadTheBook = Number(input[2]); 
    let totalHours = pagesInBook / pagesReadPerHour 
    let neededHoursPerDay = totalHours / daysToReadTheBook
    console.log(neededHoursPerDay);
}
readingPerDay(["212", "20", "2"]);
readingPerDay(["432", "15", "4"]);
