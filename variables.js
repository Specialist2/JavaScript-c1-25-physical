/* // variables allow storing data in memory for use in a program/sofware
// in js we create/initialize variables using var,const and let keywords

// var -- old/legacy way of creating variables
var age = 90;
// let and const are modern/es6 ways of creating variables
let username = "albert";
const interestRate = 20;

// let is used wit values/variables that change as the program runs
// const is used for values/variables that do not change at any point in the life of a program/software e.g PI
const PI = 3.142;
username = "vincent";

// the values in variables can be access in the application using the variable names
// console/log(something) is a way for developers to print/see outcome on the terminal/console.
console.log(age);
console.log(PI + interestRate); */

//data types
let x = 2;
let y = 3;
let z = x + y;
console.log(z);
let b = x % 2;
console.log(b);
let greeting = "Hello";
let greet = "world";
console.log(`hey, ${greeting} ${greet}`);

let r = 10;
let t = 3;
let f = 10 * 3;
console.log(f);

// strings
let paragraph = "      Rachael";
let results = paragraph.trim();

console.log(results);
console.log(paragraph.indexOf("R"));
console.log(paragraph.includes("e"));
//array
