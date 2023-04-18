function cinema (input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let ticketPrice = 0;
    let premierePrice = 12.00; // deklarirame si cenite predvaritelno
    let normalPrice = 7.50;
    let discountPrice = 5.00;

    if (movieType === "Premiere") {
        ticketPrice = premierePrice; // prosto zadavame kakva da e cenata na bileta, bez da smqtame 
    } else if (movieType === "Normal") { // kolko shte e movie income vuv if funkciqta
        ticketPrice = normalPrice;
    } else if (movieType === "Discount") { //logicheski celta na if fuknciqta e prosto da izvede ticketprice
        ticketPrice = discountPrice; // ne e pravilno da smqtame movieincome v neq
    }
    
    let movieIncome = rows * columns * ticketPrice; // smqtame si go izvun if funkciq, za da e po-kompaktno 

    console.log(`${movieIncome.toFixed(2)} leva`);
}

cinema(["Premiere","10","12"]);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);

