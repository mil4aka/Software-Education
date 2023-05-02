function storage(arr) {
    let result = new Map();

    for (let line of arr) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (result.has(product)) {
            let existingQuantity = result.get(product);
            existingQuantity += quantity;
            result.set(product, existingQuantity);
        } else {
            result.set(product, quantity);
        }
    }

    for (let [nameOfProduct, productQuantity] of result.entries()) {
        console.log(`${nameOfProduct} -> ${productQuantity}`);
    }
}

storage(
    ['tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40']
);