function examTime(input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);

    let hourstoMinutes = examHours * 60;
    let hoursArrivalMinutes = hourArrival * 60;
    let finalTime = 0
    
    if ((hoursArrivalMinutes + minuteArrival) > (examMinutes + hourstoMinutes)) { //ako chasut na idvane > testa
        finalTime = (hoursArrivalMinutes + minuteArrival) - (examMinutes + hourstoMinutes) //poluchavame razlikata
        if (finalTime >= 60) { // opredelqme da izpisva i chasovete ako sme zakusneli s nad chas
            hoursLate = finalTime / 60;
            minutesLate = finalTime % 60; //poluchavame chasovete i minutite s koito sme zakusneli
            if (minutesLate <= 9) {
                console.log(`Late`);
                console.log(`${Math.floor(hoursLate)}:0${minutesLate} hours after the start`)
            } else {
                console.log(`Late`);
                console.log(`${Math.floor(hoursLate)}:${minutesLate} hours after the start`)
 
            }
 
        } else if (finalTime < 60) { // opredelqme da izpisva samo minutite, zashtoto e pod 1 chas
            console.log(`Late`);
            console.log(`${finalTime} minutes after the start`)
        }
 
    } else if ((hoursArrivalMinutes + minuteArrival) <= (examMinutes + hourstoMinutes)) { //ako vremeto na pristigane <= vremeto na testa
        finalTime = (examMinutes + hourstoMinutes) - (hoursArrivalMinutes + minuteArrival) // poluchavame razlikata
        if (finalTime >= 60) { // ako e nad chas, logvame za da izpishe i chasovete
            housEarly = finalTime / 60;
            minutesEarly = finalTime % 60;
            if (minutesEarly < 10) {
                console.log(`Early`);
                console.log(`${Math.floor(housEarly)}:0${minutesEarly} hours before the start`)
            } else {
                console.log(`Early`);
                console.log(`${Math.floor(housEarly)}:${minutesEarly} hours before the start`)
            }
 
        } else if (finalTime < 60 && finalTime > 30 && finalTime != 0) { //opredelqme kakvo da izpisva ako e podranil s po malko ot chas
            console.log(`Early`);
            console.log(`${finalTime} minutes before the start`)
        } else if (finalTime == 0) { // opredelqme kakvo da izpisva ako e navreme
            console.log(`On time`);
        } else if (finalTime > 0 && finalTime <= 30) {// opredelqme da izpishe che e na vreme, ako e s do 30min podranil
            console.log(`On time`);
            console.log(`${finalTime} minutes before the start`)
        }
 
    }
 
}

examTime (["9","30","9","50"])
examTime(["9","00","10","30"])
examTime(["10","00","10","00"]) 
examTime (["9","00","8","30"]) 
examTime(["14","00","13","55"])
examTime(["11","30","10","55"])
examTime (["16","00","15","00"]) 
examTime(["11","30","8","12"]) 
examTime(["11","30","12","29"])

