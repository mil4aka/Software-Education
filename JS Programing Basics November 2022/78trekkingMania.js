function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let totalgroups = input.length;
    let moussala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < totalgroups; i++) {
        if (input[i] <= 5) {
            moussala += Number(input[i]);
        } else if (input[i] <= 12) {
            monblan += Number(input[i]);
        } else if (input[i] <= 25) {
            kilimanjaro += Number(input[i]);
        } else if (input[i] <= 40) {
            k2 += Number(input[i]);
        } else if (input[i] > 40) {
            everest += Number(input[i]);
        }
    }
    let totalPeople = moussala + monblan + kilimanjaro + k2 + everest;

    console.log(`${((moussala / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);

}

// trekkingMania(["10",
//     "10",
//     "5",
//     "1",
//     "100",
//     "12",
//     "26",
//     "17",
//     "37",
//     "40",
//     "78"])

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
