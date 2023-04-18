function tradeCommisions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let commision = 0;

    if (town === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            commision = (sales * 5) / 100;
        } else if (sales > 500 && sales <= 1000) {
            commision = (sales * 7) / 100;
        } else if (sales > 1000 && sales <= 10000) {
            commision = (sales * 8) / 100;
        } else if (sales > 10000) {
            commision = (sales * 12) / 100;
        } else if (sales < 0) {
            console.log("error");
        }
    } else if (town === "Varna") {
        if (sales >= 0 && sales <= 500) {
            commision = (sales * 4.5) / 100;
        } else if (sales > 500 && sales <= 1000) {
            commision = (sales * 7.5) / 100;
        } else if (sales > 1000 && sales <= 10000) {
            commision = (sales * 10) / 100;
        } else if (sales > 10000) {
            commision = (sales * 13) / 100;
        } else if (sales < 0) {
            console.log("error");
        }
    } else if (town === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commision = (sales * 5.5) / 100;
        } else if (sales > 500 && sales <= 1000) {
            commision = (sales * 8) / 100;
        } else if (sales > 1000 && sales <= 10000) {
            commision = (sales * 12) / 100;
        } else if (sales > 10000) {
            commision = (sales * 14.5) / 100;
        } else if (sales < 0) {
            console.log("error");
        }
    } else if (town != "Sofia" || town != "Varna" || town != "Plovdiv" || sales < 0) {
        console.log("error");
    }

    if (sales > 0) {
        if (town === "Sofia" || town === "Varna" || town === "Plovdiv")
        console.log(commision.toFixed(2));
    }
}

tradeCommisions(["Sofia", "1500"]);
tradeCommisions(["Plovdiv", "499.99"]);
tradeCommisions(["Varna", "3874.50"]);
tradeCommisions(["Kaspichan", "-50"]);
tradeCommisions(["jkjkkk", "1500"]);

