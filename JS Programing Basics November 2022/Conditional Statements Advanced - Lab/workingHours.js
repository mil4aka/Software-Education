function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open"); break;
        }
    } else {
        console.log("closed");
    }

    if (day === "Sunday") {
        console.log("closed");
    }
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);

