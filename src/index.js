import $ from 'jquery';

// const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// class processDate {
//   constructor (month, day, year) {
//     this.month = month,
//     this.day = day,
//     this.year = year
//   }
//
//   thisMonth() {
//     let calculatedMonth = this.month - 1;
//     let foundMonth = monthOfYear[calculatedMonth];
//     return foundMonth;
//   }
// }




$(document).ready(function() {
  $("button").click(function() {
    let userInput = ($("#input").val().split("-")).map(Number);

    // calculating month only
    // const userStuff = new processDate(userInput[0], userInput[1], userInput[2]);
    // let monthNumber = userStuff.thisMonth();

  //  Date function

    const inputStuff = new Date(userInput);
    $(".output").text(inputStuff.toDateString());
  })
});
