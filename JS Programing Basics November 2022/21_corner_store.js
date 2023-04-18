// function cornerStore(input) {
//     let product = input[0];
//     let town = input[1];
//     let quantity = Number(input[2]);
//     let coffee = 0;
//     let water = 0;
//     let beer = 0;
//     let sweets = 0;
//     let peanuts = 0;
//     let total = 0;

//     if (town === "Sofia") {
//         coffee = 0.50;
//         water = 0.80;
//         beer = 1.20;
//         sweets = 1.45;
//         peanuts = 1.60;
//         if (product === "coffee") {
//             total = coffee * quantity;
//         } else if (product === "water") {
//             total = water * quantity;
//         } else if (product === "beer") {
//             total = beer * quantity
//         } else if (product === "sweets") {
//             total = sweets * quantity
//         } else if (product === "peanuts") {
//             total = peanuts * quantity
//         }

//     } else if (town === "Plovdiv") {
//         coffee = 0.40;
//         water = 0.70;
//         beer = 1.15;
//         sweets = 1.30;
//         peanuts = 1.50;
//         if (product === "coffee") {
//             total = coffee * quantity;
//         } else if (product === "water") {
//             total = water * quantity;
//         } else if (product === "beer") {
//             total = beer * quantity
//         } else if (product === "sweets") {
//             total = sweets * quantity
//         } else if (product === "peanuts") {
//             total = peanuts * quantity
//         }
//     } else {
//         coffee = 0.45;
//         water = 0.70;
//         beer = 1.10;
//         sweets = 1.35;
//         peanuts = 1.55;
//         if (product === "coffee") {
//             total = coffee * quantity;
//         } else if (product === "water") {
//             total = water * quantity;
//         } else if (product === "beer") {
//             total = beer * quantity
//         } else if (product === "sweets") {
//             total = sweets * quantity
//         } else if (product === "peanuts") {
//             total = peanuts * quantity
//         }
//     }
//     console.log(total);
// }

// cornerStore(["coffee", "Varna", "2"]);
// cornerStore(["peanuts", "Plovdiv", "1"]);
// cornerStore(["water", "Plovdiv", "2"]);
// cornerStore(["beer", "Sofia", "2"]);
// cornerStore(["sweets", "Sofia", "2.23"]);


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
            switch(product) {
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