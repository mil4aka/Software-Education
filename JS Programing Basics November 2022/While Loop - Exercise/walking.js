function walking(input) {
    let index = 0;
    let stepsWalked = input[index];
    let stepsGoal = 10000;
    let totalSteps = 0;

    while (true) {
        if (stepsWalked != "Going home") {
            totalSteps += Number(stepsWalked);
            index++;
            stepsWalked = input[index];
            if (totalSteps >= stepsGoal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - stepsGoal} steps over the goal!`);
                break;
            };
        } else {
            index++;
            stepsWalked = Number(input[index]);
            totalSteps += stepsWalked;
            if (totalSteps >= stepsGoal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - stepsGoal} steps over the goal!`);
                break;
            } else if (totalSteps < stepsGoal) {
                console.log(`${stepsGoal - totalSteps} more steps to reach goal.`);
                break;
            };
        };
    };
};

// walking(["1000",
// "1500",
// "2000",
// "6500"]);

// walking(["1500",
// "300",
// "2500",
// "3000",
// "Going home",
// "200"]);


// walking(["1500",
// "3000",
// "250",
// "1548",
// "2000",
// "Going home",
// "2000"]);

walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"]);
