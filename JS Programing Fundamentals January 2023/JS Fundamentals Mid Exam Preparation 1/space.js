function space(input) {
    let travelroute = input[0];
    let startingfuel = Number(input[1]);
    let startingAmmo = Number(input[2]);

    let splitted = travelroute.split("||");
    let index = 0;
    let currComm = splitted[index];
    while (currComm != "Titan") {
        let currComm = splitted[index];

        if (currComm == "Titan") {
            return console.log(`You have reached Titan, all passengers are safe.`);
        }

        let commSplit = currComm.split(" ");

        switch (commSplit[0]) {
            case "Travel":
                if (Number(commSplit[1]) <= startingfuel) {
                    startingfuel -= Number(commSplit[1]);
                    console.log(`The spaceship travelled ${Number(commSplit[1])} light-years.`);
                    index++;
                } else {
                    return console.log(`Mission failed.`);
                }
                break;
            case "Enemy":
                if (startingAmmo >= Number(commSplit[1])) { //ammo is enough
                    startingAmmo -= Number(commSplit[1]);
                    console.log(`An enemy with ${Number(commSplit[1])} armour is defeated.`);
                    index++;
                } else if (startingAmmo < Number(commSplit[1])) { //ammo not enough
                    let fuelneeded = Number(commSplit[1]) * 2;
                    if (fuelneeded <= startingfuel) { //fuel enough
                        startingfuel -= fuelneeded;
                        console.log(`An enemy with ${Number(commSplit[1])} armour is outmaneuvered.`);
                        index++;
                        break;
                    } else { //fuel not enough
                        return console.log(`Mission failed.`);
                    }
                }
                break;
            case "Repair":
                let ammoAdded = Number(commSplit[1]) * 2;
                console.log(`Ammunitions added: ${ammoAdded}.`);
                startingAmmo += ammoAdded;
                let fuelAdded = Number(commSplit[1]);
                console.log(`Fuel added: ${fuelAdded}.`);
                startingfuel += fuelAdded;
                index++;
                break;
        }
    }
}

// space(
//     ['Travel 10||Enemy 30||Repair 15||Titan',
//         '50',
//         '80']
// )

space(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])
