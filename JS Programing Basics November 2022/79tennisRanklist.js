function tennisRanklist (input) {
    let totalGames = Number(input[0]);
    let startingPoints = Number(input[1]);
    let totalPoints = 0;
    let wins = 0;

    for (let i = 2; i <= totalGames + 1; i++) {
        if (input[i] === "W") {
            totalPoints += 2000;
            wins++;
        } else if (input[i] === "F") {
            totalPoints += 1200;
        } else if (input[i] === "SF") {
            totalPoints += 720;
        }
    }

    totalPoints += startingPoints;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints - startingPoints) / totalGames)}`);
    console.log(`${((wins / totalGames) * 100).toFixed(2)}%`);

}

// tennisRanklist(["5",
// "1400",
// "F",
// "SF",
// "W",
// "W",
// "SF"])

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

