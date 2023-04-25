function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let roomForOnePerson = 18.00;
    let apartment = 25.00;
    let presidentApartment = 35.00;

    let nights = days - 1;
    let finalPrice = 0;

    if (roomType == "apartment") {
        finalPrice = apartment * nights;
        if (days < 10) {
            finalPrice *= 0.70;
        } else if (days >= 10 && days <= 15) {
            finalPrice *= 0.65;
        } else if (days > 15) {
            finalPrice *= 0.50;
        };
    } else if (roomType == "president apartment") {
        finalPrice = presidentApartment * nights;
        if (days < 10) {
            finalPrice *= 0.90;
        } else if (days >= 10 && days <= 15) {
            finalPrice *= 0.85;
        } else if (days > 15) {
            finalPrice *= 0.80;
        };
    } else if (roomType == "room for one person") {
        finalPrice = roomForOnePerson * nights;
    };

    if (review == "positive") {
        finalPrice *= 1.25;
    } else if (review == "negative") {
        finalPrice *= 0.90;
    };

    console.log(finalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])

