// conditional statements- allows  execution of code depending on some state/condition/results/comparison
// if else,switch

// let birthYear = 1900;
// if (2025 - birthYear > 55) {
//   console.log("You are too old for this!!!");
// } else if (2025 - birthYear > 18) {
//   console.log("Old enough to access site!!! ");
//   console.log("Hi, welcome!");
// } else {
//   console.log("You are not allowed here!!!");
// }

let marks = 99;
if (marks < 0 || marks > 100 || typeof marks !== "number") {
  console.log("Error:- Invalid marks!!");
} else if (marks >= 80) {
  console.log("Grade:A");
} else if (marks >= 65) {
  console.log("Grade:B");
} else if (marks >= 50) {
  console.log("Grade:C");
} else if (marks >= 40) {
  console.log("Grade:D");
} else {
  console.log("Grade E");
}

// Rewrite the above code using switch.
// if (marks >= 80) {
//   console.log("A");
// } else if (marks >= 65) {
//   console.log("B");
// }else(marks > 50)
// {
//   console.log("C")
// }if (mark > 40){
//   console.log("D")
// }else (marks < 40){
//   console.log("E")
// }
