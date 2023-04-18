function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength / 8;
    let restTime = breakLength / 4;
    let outsideOfRestTime = lunchTime + restTime;
    let timeNeeded = episodeLength + outsideOfRestTime

    if (breakLength >= timeNeeded) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakLength - timeNeeded)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded - breakLength)} more minutes.`);
    }


}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"])
