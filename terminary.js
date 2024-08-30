/**
 * Ternary --> three parts
 *  ?  :
 *
 * condition ? do something when true : do something when false
 */

const age = 20;

// age >= 18 ? console.log("Vote dio") : console.log("Ghumai thako");

// if (age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("Ghumai thako");
// }

let price = 500;
const isLeader = true;
if (price === true) {
  price = 0;
} else {
  price = price + 100;
}

price = isLeader === true ? 0 : price + 100;

//  Optional : semi-advance ternary

if
