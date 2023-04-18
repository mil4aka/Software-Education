function clock() {

    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            if (m < 10 && h < 10) { //ako i chasovete i minutite sa pod 10
                console.log(`0${h}:0${m}`); // gi logvame s 0 otpred
            } else if (h < 10) {
                console.log(`0${h}:${m}`); // tuka e za sluchaite kogato minutite sa nad 10, no chasovete ne
            } else if (m < 10) {
                console.log(`${h}:0${m}`); // ako chasovete sa nad 10, no minutite ne
            } else {
                console.log(`${h}:${m}`); // vuv vsichki ostanali sluchai
            }
        }
    }
} // trqbva da se otbeleji, che vinagi purvo trqbva da izkarame sluchaq kogato chasovete sa pod 10, a minutite ne
// kogato opredelqme if konstrukciite, sledvame si logikata na posledovatelnostta na chasovete
clock()