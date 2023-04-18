function summerOutfit(input) {
    let temperature = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = "";
    let shoes = "";

    if (timeOfDay === "Morning") {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (timeOfDay === "Afternoon") {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins"
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (temperature >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (timeOfDay === "Evening") {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}


summerOutfit(["16","Morning"]);
summerOutfit(["22","Afternoon"]);
summerOutfit(["28","Evening"]);
