function towns(arr) {
    let objects = {};
    for (let el of arr) {
        let splitted = el.split(" | ");
        objects.town = splitted[0];
        objects.latitude = Number(splitted[1]).toFixed(2);
        objects.longitude = Number(splitted[2]).toFixed(2);
        console.log(objects);
    }
}

towns(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)