function movieTickets(input) {
   let day = input[0];
   let ticketPrice = 0;

   if (day === "Monday" || day === "Tuesday" || day === "Friday") {
      ticketPrice = 12;
   } else if (day === "Wednesday" || day === "Thursday") {
      ticketPrice = 14;
   } else if (day === "Saturday" || day === "Sunday") {
      ticketPrice = 16;
   }
   console.log(ticketPrice);
}

movieTickets(["Monday"]);
movieTickets(["Friday"]);
movieTickets(["Sunday"]);
