function spice(startingYield) {
    let spiceConsumedByWorkers = 26; //at end of shift and when mine is exausted
    let daysOperated = 0;
    let currentSpiceInMine = startingYield;
    let spiceExtracted = 0;

    while (true) {
        if (currentSpiceInMine >= 100) {
            spiceExtracted += currentSpiceInMine;
            spiceExtracted -= spiceConsumedByWorkers;
            currentSpiceInMine -= 10;
            daysOperated++;
        } else {
            if (spiceExtracted >= spiceConsumedByWorkers) {
            spiceExtracted -= spiceConsumedByWorkers;
            break;
            } else {
                break;
            }
        }
    }
    console.log(daysOperated);
    console.log(spiceExtracted);
}
spice(111)
spice(450)