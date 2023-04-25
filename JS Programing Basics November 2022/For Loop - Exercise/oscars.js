function oscars(input) {
    let name = input[0];
    let academyPoints = Number(input[1]);
    let jurieCount = Number(input[2]);
    let totalInputCount = input.length;
    let jurieLetters = 0;

    for (let i = 3; i < totalInputCount && academyPoints < 1250.5; i += 2) {
        jurieLetters = input[i].length;
        academyPoints += ((jurieLetters * input[i + 1]) / 2);
    };

    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else if (academyPoints < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    };
};

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

