function atanas(input) {
    let index = 0;
    let command = input[index];
    let startingMeters = 5364;
    let mountainPeak = 8848;
    let metersClimbed = 0;
    let daysClimbing = 1;
    let totalMeters = startingMeters;

    while (command != "END") {
        if (command == "Yes") {
            daysClimbing++;
            if (daysClimbing > 5) {
                break;
            }
            index++;
            command = input[index]
            metersClimbed = Number(input[index]);
            totalMeters += metersClimbed;
        } else if (command == "No") {
            index++;
            metersClimbed = Number(input[index]);
            totalMeters += metersClimbed;
        } else {
            break;
        }
        if (totalMeters >= mountainPeak) {
            break;
        }
        index++;
        command = input[index];
    }


    if (totalMeters >= mountainPeak) {
        console.log(`Goal reached for ${daysClimbing} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${totalMeters}`);
    }
}

atanas(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])
