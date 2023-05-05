function theatrePromotions(day, age) {
    let ticketprice = 0;
    if (age >= 0 && age <= 18) {
        if (day == "Weekday") {
            ticketprice = 12
        } else if (day == "Weekend") {
            ticketprice = 15;
        } else if (day == "Holiday") {
            ticketprice = 5;
        }
    } else if (age > 18 && age <= 64) {
        if (day == "Weekday") {
            ticketprice = 18;
        } else if (day == "Weekend") {
            ticketprice = 20;
        } else if (day == "Holiday") {
            ticketprice = 12;
        }
    } else if (age > 64 && age <= 122) {
        if (day == "Weekday") {
            ticketprice = 12;
        } else if (day == "Weekend") {
            ticketprice = 15;
        } else if (day == "Holiday") {
            ticketprice = 10;
        }
    } else {
        console.log("Error!");
    }

    if (ticketprice != 0) {
        console.log(`${ticketprice}$`);
    }
}

theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)