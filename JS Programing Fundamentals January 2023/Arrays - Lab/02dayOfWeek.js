function dayOfWeek(num) {
    let arrDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num > 0 && num <= 7) {
        console.log(arrDays[num - 1])
    } else {
        console.log("Invalid day!");
    }
}

dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)