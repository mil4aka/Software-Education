function usdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(`${usd} USD = ${bgn} BGN`)
}

usdToBgn(["22"])
usdToBgn(["100"])
usdToBgn(["12.5"])


// 1 USD = 1.79549 BGN