// function loadingBar(num) {
//     let percentageArr = [];
//     let loadingBars = Math.floor(num / 10);
//     let progress = 1;
//     for (progress = 1; progress <= loadingBars; progress++) {
//         percentageArr.push("%");
//     }
//     for (let j = progress; j <= 10; j++) {
//         percentageArr.push(".")
//     }
    
//     if (num < 100) {
//         console.log(`${num}% [${percentageArr.join("")}]\nStill loading...`);
//     } else if (num == 100) {
//         console.log(`${num}% Complete!\n[${percentageArr.join("")}]`);
//     }
// }

function loadingBar(num) {
    let percentageArr = [];
    let loadingBars = Math.floor(num / 10);
    let leftProgress = 10 - loadingBars;
    let charForProgress = "%";
    let charForLeftProgress = ".";
    percentageArr.push(charForProgress.repeat(loadingBars));
    percentageArr.push(charForLeftProgress.repeat(leftProgress));

    if (num < 100) {
        console.log(`${num}% [${percentageArr.join("")}]\nStill loading...`);
    } else if (num == 100) {
        console.log(`${num}% Complete!\n[${percentageArr.join("")}]`);
    }
}

loadingBar(30)
// loadingBar(50)
// loadingBar(100)

