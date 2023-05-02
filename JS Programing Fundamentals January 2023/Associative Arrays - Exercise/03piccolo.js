function piccolo(inputArr) {
    let cars = new Set();
    for (let el of inputArr) {
        let [command, carNum] = el.split(", ");
        if (command == "IN") {
            cars.add(carNum);
        } else {
            cars.delete(carNum);
        }
    }
    let result = Array.from(cars).sort();
    
    if (cars.size == 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (let car of result) {
            console.log(car);
        }
    }
}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
)