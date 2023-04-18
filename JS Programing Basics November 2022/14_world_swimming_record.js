function swimmingRecord(input) {
    let timeToBeat = Number(input[0]);
    let distance = Number(input[1]);
    let swimSpeed = Number(input[2]);

    let waterResistance = (Math.floor(distance / 15) * 12.5);
    let timeNeeded = distance * swimSpeed + waterResistance;
    let differenceInTime = timeNeeded - timeToBeat;

    if (timeNeeded < timeToBeat) {
        console.log(`Yes, he succeeded! The new world record is ${(timeNeeded).toFixed(2)} seconds.`);
    } else if (timeNeeded >= timeToBeat) {
        console.log(`No, he failed! He was ${(differenceInTime).toFixed(2)} seconds slower.`);
    }
}

swimmingRecord(["10464", "1500", "20"]);
swimmingRecord(["55555.67", "3017", "5.03"]);