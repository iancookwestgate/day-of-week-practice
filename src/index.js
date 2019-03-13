import $ from 'jquery';

const regYear = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYear = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


class processDate {
  constructor (month, day, year) {
    this.month = month,
    this.day = day,
    this.year = year
  }

  thisMonth() {
    let calculatedMonth = this.month - 1;
    let foundMonth = monthOfYear[calculatedMonth];
    return foundMonth;
  }

  weekday() {

  }
}




$(document).ready(function() {
  $("button").click(function() {
    let userInput = ($("#input").val().split("-")).map(Number);

    const userStuff = new processDate(userInput[0], userInput[1], userInput[2]);

    let monthNumber = userStuff.thisMonth();

    console.log(monthNumber);
  })
});
