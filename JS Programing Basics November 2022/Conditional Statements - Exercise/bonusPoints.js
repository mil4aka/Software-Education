function bonusPoints(input) {
    let number = Number(input[0]);
    let bonusPoints = 0;

    if (number <= 100) {
        bonusPoints = 5;
    } else if (number > 100 && number <= 1000) {
        bonusPoints = (number / 100) * 20;
    } else if (number > 1000) {
        bonusPoints = (number / 100) * 10;
    }

    if (number % 2 == 0) {
        bonusPoints += 1;
    } else if (number % 10 == 5) {
        bonusPoints += 2
    }

    console.log(bonusPoints);
    console.log(bonusPoints + number);
}

bonusPoints(["20"]);
bonusPoints(["175"]);
bonusPoints(["2703"]);
bonusPoints(["15875"]);
