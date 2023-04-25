function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" ||
        day === "Friday") {
        switch (fruit) {
            case "banana": totalPrice = quantity * 2.50; break;
            case "apple": totalPrice = quantity * 1.20; break;
            case "orange": totalPrice = quantity * 0.85; break;
            case "grapefruit": totalPrice = quantity * 1.45; break;
            case "kiwi": totalPrice = quantity * 2.70; break;
            case "pineapple": totalPrice = quantity * 5.50; break;
            case "grapes": totalPrice = quantity * 3.85; break;
            default: console.log("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": totalPrice = quantity * 2.70; break;
            case "apple": totalPrice = quantity * 1.25; break;
            case "orange": totalPrice = quantity * 0.90; break;
            case "grapefruit": totalPrice = quantity * 1.60; break;
            case "kiwi": totalPrice = quantity * 3.00; break;
            case "pineapple": totalPrice = quantity * 5.60; break;
            case "grapes": totalPrice = quantity * 4.20; break;

            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }

    if ((day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" ||
        day === "Friday" || day === "Saturday" || day === "Sunday")) {
        if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" ||
            fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {
            console.log(totalPrice.toFixed(2));
        }
    }
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
