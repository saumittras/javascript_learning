/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 85;
let height = 1.74;
let bmi = weight / height ** 2;

if (bmi < 18.5) {
  console.log("You are under weight");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("You are normal");
}
