function centuriesToMinutes (centuries) {
    let oneYear = 365.2422;
    let years = centuries * 100;
    let days = Math.floor(years * oneYear);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes (1)
centuriesToMinutes (5)