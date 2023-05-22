function manOWar(inputArr) {
    let statusPirateShip = inputArr.shift().split(">").map(Number);
    let statusWarShip = inputArr.shift().split(">").map(Number);
    let maxHealth = inputArr.shift();
    maxHealth = Number(maxHealth);
    let sumPirateShip = 0;
    let sumWarShip = 0;
    // console.log(statusPirateShip);
    // console.log(statusWarShip);
    let index = 0;
    let currCommand = inputArr[index];

    while (currCommand != "Retire") {
        let splitted = currCommand.split(" ");
        let operation = splitted.shift();
        splitted = splitted.map(Number)

        switch (operation) {
            case "Fire"://fire - pirate ship attacks warship
                let hullToFire = splitted.shift();
                let damage = splitted.shift();
                if (hullToFire > statusWarShip.length - 1 || hullToFire < 0) {
                    index++;
                    currCommand = inputArr[index];
                    continue;
                }
                statusWarShip[hullToFire] -= damage;
                if (statusWarShip[hullToFire] <= 0) {
                    return "You won! The enemy ship has sunken.";
                }
                index++;
                currCommand = inputArr[index];
                break;
            case "Defend": // warship attacks pirate ship
                let startIndex = splitted.shift();
                let endIndex = splitted.shift();
                let damageDefended = splitted.shift();
                if (startIndex < 0 || startIndex > statusPirateShip.length || endIndex < 0 ||
                    endIndex > statusPirateShip.length || endIndex < startIndex || startIndex > endIndex) {
                    index++;
                    currCommand = inputArr[index];
                    continue;
                }
                for (let x = startIndex; x <= endIndex; x++) {
                    statusPirateShip[x] = statusPirateShip[x] - damageDefended;
                    if (statusPirateShip[x] <= 0) {
                        return console.log("You lost! The pirate ship has sunken.");
                    }
                }
                index++;
                currCommand = inputArr[index];
                break;
            case "Repair": //repairs pirate ship
                let hullIndexToRepair = splitted.shift();
                let hpToRepair = splitted.shift();
                if (hullIndexToRepair < 0 || hullIndexToRepair > statusPirateShip.length - 1) {
                    index++;
                    currCommand = inputArr[index];
                    continue;
                }
                let hullToRepair = statusPirateShip.splice(hullIndexToRepair, 1).toString();
                let repairedHullHp = Number(hullToRepair) + hpToRepair;
                if (repairedHullHp > maxHealth) {
                    repairedHullHp = maxHealth;
                }
                statusPirateShip.splice(hullIndexToRepair, 0, repairedHullHp);
                // console.log(statusPirateShip);
                index++;
                currCommand = inputArr[index];

                break;
            case "Status": //pirate ship
                let sectionsNeedingRepair = statusPirateShip.filter(x => x < (maxHealth * .20));
                console.log(`${sectionsNeedingRepair.length} sections need repair.`);
                index++;
                currCommand = inputArr[index];
                break;
        }
    }
    for (let el of statusPirateShip) {
        sumPirateShip += el;
    }
    for (let el of statusWarShip) {
        sumWarShip += el;
    }
    console.log(`Pirate ship status: ${sumPirateShip}\nWarship status: ${sumWarShip}`);
}

// manOWar(
// ["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"
// ])

// manOWar(
//     ["2>3>4>5>2",
//         "6>7>8>9>10>11",
//         "20",
//         "Status",
//         "Fire 2 3",
//         "Defend 0 4 11",
//         "Repair 3 18",
//         "Retire"
//     ]);


manOWar(["2>3>4>5>6",
    "2>3>4>5>6>10>11",
    "15",
    "Fire 3 1",
    "Fire 2 1",
    "Fire 1 1",
    "Defend 0 4 1",
    "Repair 0 26",
    "Retire"])