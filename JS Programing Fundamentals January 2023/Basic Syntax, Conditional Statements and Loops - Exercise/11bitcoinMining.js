function bitcoinMining(input) {
    let index = 0;
    let bitcoinBought = false;
    let dayOfFoundBitcoin = 0;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let daysDigging = 0;
    let goldDug = 0;
    let moneySaved = 0;
    let boughtBitcoins = 0;
    let ownedBitcoins = 0;

    while (input.length - daysDigging > 0) {
        daysDigging++;
        goldDug = Number(input[index]);
        index++;
        if (daysDigging % 3 == 0) {
            goldDug *= 0.70;
        }
        moneySaved += goldDug * goldPrice;
        if (moneySaved >= bitcoinPrice) {
            boughtBitcoins = parseInt(moneySaved / bitcoinPrice);
            ownedBitcoins += boughtBitcoins;
            moneySaved -= boughtBitcoins * bitcoinPrice
            if (bitcoinBought == false) {
                dayOfFoundBitcoin = daysDigging;
                bitcoinBought = true;
            }
        }
    }
    console.log(`Bought bitcoins: ${ownedBitcoins}`);
    if (bitcoinBought == true) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFoundBitcoin}`);
    }
    console.log(`Left money: ${moneySaved.toFixed(2)} lv.`);
}