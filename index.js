// function lifeInWeeks(age) {
//     let remainder = 90 - age;
//     let days = remainder * 365;
//     let weeks = remainder * 52;
//     let months = remainder * 12
//     console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
// }
// lifeInWeeks(23);
//
// function bmiCalculator(weight, height) {
//     return  Math.round(weight / Math.pow(height, 2))
// }
//
// let bmi = bmiCalculator(65, 1.8);
// console.log(bmi)
// let name1 = prompt("What is your name?");
// let name2 = prompt("What is their name?")
//
// function lovesCalculator(name1, name2) {
//     return Math.round(Math.random() * 100)
// }
//
//
// console.log(lovesCalculator(name1, name2));

// function fibonacciGenerator(n) {
//     let result = [];
//     if(n === 0) return result;
//     result[0] = 0;
//     if (n === 1) return result;
//     result[1] = 1;
//     for (let i = 2; i < n; i++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }
//     return result;
// }
//
// console.log(fibonacciGenerator(0))

// let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
//
// function whosPaying(names) {
//     return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!"
// }
// console.log(whosPaying(names))

// function bmiCalculator(weight, height) {
//     let bmi = Math.round(weight / Math.pow(height, 2));
//     if (bmi < 18.5) return "Your BMI is " + bmi + ", so you are underweight.";
//     else if (bmi >= 18.5 && bmi <= 24.9) return "Your BMI is " + bmi + ", so you have a normal weight.";
//     else return "Your BMI is " + bmi + ", so you are overweight.";
// }
// console.log(bmiCalculator(100, 1.85));

// function isLeap(year) {
//     if (((year % 4 === 0) || (year % 400 === 0)) && (!year % 100 === 0)) return "Leap year.";
//     else return  "Not leap year.";
// }
//
// console.log(isLeap(1900))