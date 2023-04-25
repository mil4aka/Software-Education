function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let tripCost = 0;
    let destination = "";
    let tripType = "";

    if (budget <= 100) {
        if (season == "summer") {
            tripCost = budget * 0.30;
            tripType = "Camp";
        } else if (season == "winter") {
            tripCost = budget * 0.70;
            tripType = "Hotel";
        };
        destination = "Bulgaria";
    } else if (budget <= 1000) {
        if (season == "summer") {
            tripCost = budget * 0.40;
            tripType = "Camp";
        } else if (season == "winter") {
            tripCost = budget * 0.80;
            tripType = "Hotel";
        };
        destination = "Balkans";
    } else if (budget > 1000) {
        tripCost = budget * 0.90;
        destination = "Europe";
        tripType = "Hotel";
    };

    console.log(`Somewhere in ${destination}`);
    console.log(`${tripType} - ${(tripCost).toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);