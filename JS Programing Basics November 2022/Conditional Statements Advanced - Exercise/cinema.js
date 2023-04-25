function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    // decalre prices beforehand
    let ticketPrice = 0;
    let premierePrice = 12.00;
    let normalPrice = 7.50;
    let discountPrice = 5.00;

    // determine ticketPrice in conditional statements
    if (movieType === "Premiere") {
        ticketPrice = premierePrice;
    } else if (movieType === "Normal") {
        ticketPrice = normalPrice;
    } else if (movieType === "Discount") {
        ticketPrice = discountPrice;
    }

    // calculate ticketPrice out of conditional statement
    let movieIncome = rows * columns * ticketPrice;

    console.log(`${movieIncome.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);

