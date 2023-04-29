function houseParty(guestArr) {
    let guestArrCopy = guestArr.slice();
    let isGoingArr = [];

    for (let el of guestArrCopy) {
        let splitList = el.split(" ");
        if (!isGoingArr.includes(splitList[0]) && splitList[2] != "not") {
            isGoingArr.push(splitList[0]);
        } else if (!isGoingArr.includes(splitList[0]) && splitList[2] == "not") {
            console.log(`${splitList[0]} is not in the list!`);
        } else if (isGoingArr.includes(splitList[0]) && splitList[2] != "not") {
            console.log(`${splitList[0]} is already in the list!`);
        } else {
           isGoingArr.splice(isGoingArr.indexOf(splitList[0]), 1)
        }
    }
    console.log(isGoingArr.join("\n"));
}

// houseParty(
//     ['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']
// )

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)