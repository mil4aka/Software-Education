function storeProvision(currStockArr, orderedForDeliveryArr) {
    let products = {};
    let currStockL = currStockArr.length;
    let orderedStockL = orderedForDeliveryArr.length;

    for (let i = 0; i < currStockL; i += 2) {
        let product = currStockArr[i];
        products[product] = Number(currStockArr[i + 1]);
    }

    for (let i = 0; i < orderedStockL; i += 2) {
        let orderedProd = orderedForDeliveryArr[i];
        if (products.hasOwnProperty(orderedProd)) {
            products[orderedProd] += Number(orderedForDeliveryArr[i + 1]);
        } else {
            products[orderedProd] = Number(orderedForDeliveryArr[i + 1]);
        }
    }

    for (let [key, value] of Object.entries(products)) {
        console.log(`${key} -> ${value}`);
    }
}

// storeProvision(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
// )

storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
)