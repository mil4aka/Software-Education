function aMinerTask(input) {
    let inputL = input.length;
    let resources = {};
    for (let i = 0; i < inputL; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];
        if (!resources.hasOwnProperty(resource)){
            resources[resource] = Number(quantity);
        } else {
            resources[resource] += Number(quantity);
        }
    }
    for(let [res, quantity] of Object.entries(resources)) {
        console.log(`${res} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])