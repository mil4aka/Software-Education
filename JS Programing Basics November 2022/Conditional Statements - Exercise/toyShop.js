function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzleCost = 2.6;
    let talkingDollsCost = 3;
    let teddyBearsCost = 4.1;
    let minionsCost = 8.2;
    let trucksCost = 2;

    let toysCount = puzzlesCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount;
    let sum = puzzlesCount * puzzleCost + talkingDollsCount * talkingDollsCost +
        teddyBearsCount * teddyBearsCost + minionsCount * minionsCost + trucksCount * trucksCost;

    if (toysCount >= 50) {
        sum *= 0.75;
    }

    sum *= 0.9; // we pay rent no matter the toy count;

    if (sum >= tripPrice) {
        console.log(`Yes! ${(sum - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - sum).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);