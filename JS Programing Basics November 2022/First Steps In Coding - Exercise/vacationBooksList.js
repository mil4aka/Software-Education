function vacationBooksList (input) {
    let pagesInABook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToReadTheBook = Number(input[2]);
    let hoursTotalNeeded = pagesInABook / pagesPerHour;
    let hoursNeededPerDay = hoursTotalNeeded / daysToReadTheBook;
    
    console.log(hoursNeededPerDay);
}