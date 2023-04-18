// function toyShop(input) {
//     let cenaEkskurziq = Number(input[0]);
//     let puzzlesCount = Number(input[1]);
//     let talkingDollsCount = Number(input[2]);
//     let teddyBearsCount = Number(input[3]);
//     let minionsCount = Number(input[4]);
//     let trucksCount = Number(input[5]);

//     let puzzleCost = 2.6;
//     let talkingDollsCost = 3;
//     let teddyBearsCost = 4.1;
//     let minionsCost = 8.2;
//     let trucksCost = 2;

//     let broiIgrachki = puzzlesCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount;
//     let suma = puzzlesCount * puzzleCost + talkingDollsCount * talkingDollsCost + teddyBearsCount * teddyBearsCost + minionsCount * minionsCost + trucksCount * trucksCost;

//     if (broiIgrachki >= 50) {
//         discount = suma * 0.25;

//         let naem = krainaCena * 0.10;


//     }
// let krainaCena = suma - discount
//     let pechalba = krainaCena - naem;
//     if (pechalba > cenaEkskurziq) {
//         console.log(`Yes! ${(pechalba - cenaEkskurziq).toFixed(2)} lv left.`)
//     } else {
//         console.log(`Not enough money! ${(cenaEkskurziq - pechalba).toFixed(2)} lv needed.`);
//     }
// }

// // toyShop(["40.8", "20", "25", "30", "50", "10"]);
// toyShop((["320", "8", "2", "5", "5", "1"]));




function toyShop(input) {
    let cenaEkskurziq = Number(input[0]);
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
    let suma = puzzlesCount * puzzleCost + talkingDollsCount * talkingDollsCost +
        teddyBearsCount * teddyBearsCost + minionsCount * minionsCost + trucksCount * trucksCost;


    if (toysCount >= 50) {
    suma *= 0.75;
    }

    suma *= 0.9; // plashtame naema nezavisimo ot broq na igrachkite

    if (suma >= cenaEkskurziq) {
        console.log(`Yes! ${(suma - cenaEkskurziq).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(cenaEkskurziq - suma).toFixed(2)} lv needed.`);
    }
    
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);