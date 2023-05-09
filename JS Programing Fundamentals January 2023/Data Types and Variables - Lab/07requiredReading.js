function requiredReading(pagesCount, pagesReadPerH, daysToReadTheBook) {
    let totalTime = pagesCount / pagesReadPerH;
    let hoursPerDay = totalTime / daysToReadTheBook;
    console.log(hoursPerDay.toFixed(1));
}

requiredReading(212, 20, 2)
requiredReading(432,
    15 ,
    4 
    )