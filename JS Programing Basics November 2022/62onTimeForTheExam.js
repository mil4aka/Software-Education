function onTimeForTheExam (input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let timeOfArrivalHours = Number(input[2]);
    let timeOfArrivalMinutes = Number|(input[3]);

    let timeOfArrivalIntoMinutes = timeOfArrivalHours * 60 + timeOfArrivalMinutes;
    let examTimeIntoMinutes = examHours * 60 + examMinutes; 

    let beingOnTime = (timeOfArrivalIntoMinutes - examTimeIntoMinutes == 0 ||
    examTimeIntoMinutes - timeOfArrivalIntoMinutes <= 30); //ako e podranil s do 30min

    let beingEarly = (timeOfArrivalIntoMinutes - examTimeIntoMinutes < 30); // ako e podranil s nad 30min

    let beingLate = (examTimeIntoMinutes < timeOfArrivalIntoMinutes);

    if (beingOnTime) {
        console.log("On time");
    } else if (beingEarly) {
        console.log("Early");
    } else if (beingLate) {
        console.log("Late");
    }

    if (timeOfArrivalIntoMinutes != examTimeIntoMinutes && (beingOnTime)) { //ako e navreme
        console.log(`${examTimeIntoMinutes - timeOfArrivalIntoMinutes} minutes before the start`);
    } else if (beingEarly) { // ako e podranil
        if (examHours - timeOfArrivalHours != 0 && (examTimeIntoMinutes - timeOfArrivalIntoMinutes) != 60) {
            console.log(`${examHours - timeOfArrivalHours}:${(examTimeIntoMinutes - timeOfArrivalIntoMinutes) % 60} hours before the start`);
        } else if (examHours - timeOfArrivalHours != 0) {
            console.log(`${examHours - timeOfArrivalHours}:00 hours before the start`);
        }  
    } 
    // else if (beingLate) {
    //     if (timeOfArrivalHours )
    // }        
}  

// onTimeForTheExam(["9","00","8","30"]) ok
// onTimeForTheExam(["10","00","10","00"]) ok
// onTimeForTheExam(["11","30","8","12"]) ok
// onTimeForTheExam(["16","00","15","00"]) ok
onTimeForTheExam(["9","30","9","50"])



