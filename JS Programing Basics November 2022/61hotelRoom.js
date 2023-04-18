function hotelRoom (input) {
    let month = input[0];
    let days = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month == "May" || month == "October") {
        studioPrice = 50;
        apartmentPrice = 65;
    } else if (month == "June" || month == "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
    } else if (month == "July" || month == "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    let totalCostStudio = days * studioPrice;
    let totalCostApartment = days * apartmentPrice;

    if ((days > 7 && days <=14) && (month == "May" || month == "October")) {
        totalCostStudio *= 0.95; 
    } else if (days > 14 && (month == "May" || month == "October")) {
        totalCostStudio *= 0.70;
    } else if (days > 14 && (month == "June" || month == "September")) {
        totalCostStudio *= 0.80;
    }

    if (days > 14) {
        totalCostApartment *= 0.90; 
    }


    console.log(`Apartment: ${totalCostApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalCostStudio.toFixed(2)} lv.`);
}

hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);

