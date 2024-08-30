/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let student = false;
let age = 18;

if (age < 10) {
  console.log("free");
} else if (age >= 10 && age < 60) {
  if (student) {
    console.log("50% discount");
  } else {
    console.log("Fare 800 tk");
  }
} else {
  console.log("You got 15% discount ");
}
