function townShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let totalCost = 0;

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": totalCost = quantity * 0.50; break;
                case "water": totalCost = quantity * 0.80; break;
                case "beer": totalCost = quantity * 1.20; break;
                case "sweets": totalCost = quantity * 1.45; break;
                case "peanuts": totalCost = quantity * 1.60; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": totalCost = quantity * 0.45; break;
                case "water": totalCost = quantity * 0.70; break;
                case "beer": totalCost = quantity * 1.10; break;
                case "sweets": totalCost = quantity * 1.35; break;
                case "peanuts": totalCost = quantity * 1.55; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": totalCost = quantity * 0.40; break;
                case "water": totalCost = quantity * 0.70; break;
                case "beer": totalCost = quantity * 1.15; break;
                case "sweets": totalCost = quantity * 1.30; break;
                case "peanuts": totalCost = quantity * 1.50; break;
            }
            break;
    }
    console.log(totalCost);
}

townShop(["coffee", "Varna", "2"]);
townShop(["peanuts", "Plovdiv", "1"]);
townShop(["water", "Plovdiv", "2"]);
townShop(["beer", "Sofia", "2"]);
townShop(["sweets", "Sofia", "2.23"]);