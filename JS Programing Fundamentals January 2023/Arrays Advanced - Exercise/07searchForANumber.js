function searchForANumber(arr, commandArr) {
    let arrCopy = arr.slice();
    let commandArrCopy = commandArr.slice();
    let elToTake = commandArrCopy[0];
    let elToDel = commandArrCopy[1];
    let elToSearch = commandArrCopy[2];

    let takenElArr = arrCopy.splice(0, elToTake);
    let deletedElArr = takenElArr.splice(0, elToDel);
    let leftElArr = takenElArr.filter((x, i) => x === elToSearch);

    console.log(`Number ${elToSearch} occurs ${leftElArr.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)

