function minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;

    if (minutesPlus15 >= 60) {
        hours += 1;
        minutesPlus15 -= 60;
    }

    if (hours > 23) {
        hours = 0;
    }

    if (minutesPlus15 < 10) {
        console.log(`${hours}:0${minutesPlus15}`);
    } else {
        console.log(`${hours}:${minutesPlus15}`);
    }
}
minutes(["1", "46"])
minutes(["0", "01"])
minutes(["23", "59"]);