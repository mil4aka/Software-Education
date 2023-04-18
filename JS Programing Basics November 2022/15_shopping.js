function shopping(input) {
    let budget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videocardCost = 250;
    let processorCost = (videocardCost * videocardCount) * 0.35;
    let ramCost = (videocardCost * videocardCount) * 0.10;

    let totalCost = videocardCost * videocardCount + processorCost * processorCount +
        ramCost * ramCount

    if (videocardCount > processorCount) {
        totalCost *= 0.85;
    }

    if (budget >= totalCost) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45","3","1","1"]);