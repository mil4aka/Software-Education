function vacation(group, peopleType, dayOfWeek) {
    let priceForStay = 0;
    let totalPrice = 0;
    if (peopleType == "Students") {
        if (dayOfWeek == "Friday") {
            priceForStay = 8.45;
        } else if (dayOfWeek == "Saturday") {
            priceForStay = 9.80;
        } else if (dayOfWeek == "Sunday") {
            priceForStay = 10.46;
        }
        totalPrice = group * priceForStay;
        if (group >= 30) {
            totalPrice *= 0.85;
        }
    } else if (peopleType == "Business") {
        if (dayOfWeek == "Friday") {
            priceForStay = 10.90;
        } else if (dayOfWeek == "Saturday") {
            priceForStay = 15.60;
        } else if (dayOfWeek == "Sunday") {
            priceForStay = 16;
        }
        totalPrice = group * priceForStay;
        if (group >= 100) {
            totalPrice = (group - 10) * priceForStay;
        }
    } else if (peopleType == "Regular") {
        if (dayOfWeek == "Friday") {
            priceForStay = 15;
        } else if (dayOfWeek == "Saturday") {
            priceForStay = 20;
        } else if (dayOfWeek == "Sunday") {
            priceForStay = 22.5;
        }
        totalPrice = priceForStay * group;
        if (group >= 10 && group <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}