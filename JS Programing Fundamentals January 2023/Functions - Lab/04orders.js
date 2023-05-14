function orders(products, quantity) {
    let total = 0;
    switch (products) {
        case "coffee": total = 1.50 * quantity; break;
        case "water": total = 1.00 * quantity; break;
        case "coke": total = 1.40 * quantity; break;
        case "snacks": total = 2.00 * quantity; break;
    }
    console.log(total.toFixed(2));
}

orders("water", 5)
orders("coffee", 2)