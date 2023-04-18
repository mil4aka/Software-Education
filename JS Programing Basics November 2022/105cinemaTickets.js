function cinemaTickets(input) {

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTickets = 0;
    let index = 0;
    let currentMovie = input[index];
    index++;
    
    while (currentMovie != "Finish") {
        let seatAvailable = Number(input[index]);
        index++;
        let boughtSeats = 0;

        while (true) {
            if (seatAvailable == boughtSeats) { //tuk kazvame ako svobodnite mesta sa izcherpani, a ne
                break; // da proverqvame dali ostanalite svobodni mesta sa 0;
            }
            let currentTicket = input[index];
            index++;
            if (currentTicket == "End") {
                break;
            }
            boughtSeats++; //vajno e da gi broim ot 0 nagore, a ne da izvajdame
            totalTickets++;

            if (currentTicket == "student") {
                studentTicket++;
            } else if (currentTicket == "standard") {
                standardTicket++;
            } else if (currentTicket == "kid") {
                kidTicket++;

            }
        }
        console.log(`${currentMovie} - ${(100 * boughtSeats / seatAvailable).toFixed(2)}% full.`);
        currentMovie = input[index];
        index++;

    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(100 * studentTicket / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${(100 * standardTicket / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(100 * kidTicket / totalTickets).toFixed(2)}% kids tickets.`);
}

// cinemaTickets(["Taxi",
//     "10",
//     "standard",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "standard",
//     "End",
//     "Scary Movie",
//     "6",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "Finish"])


cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
