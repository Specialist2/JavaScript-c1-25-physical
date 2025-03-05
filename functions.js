// Fuction - is a reusable block of code {} . Fuction create their own scope for variables.

// defining a fuction --- regular  fuction vs arrow functions

function doSomething() {
  console.log("Block of code to be executed");
  console.log("Regular fuction");
}

const doSomethingElse = () => {
  console.log("Block of code to be executed");
  console.log("Arrow fuction");
};

// using/calling/invoking fuctions -- as many times as we want

doSomething();
doSomethingElse();
doSomethingElse();
doSomethingElse();
doSomething();

// write a fuction to convert money to different currencies depending on countries provided
function convertCurrency(amount, country) {
  // amount and country are parameters /arguments for this function- they are variables only accessible inside
  //  this function's block/scope
  // any other variable created within this block of code is only accessible here.

  console.log("Hello my friend from " + country);
  if (country == "USA") {
    console.log("Amount is:" + amount / 129 + "USD");
  } else if (country == "Uganda") {
    console.log("Amount is:" + amount * 28 + "UGSH");
  } else if (country == "japan") {
    console.log("Amount is:" + amount * 1.17 + "YEN");
  } else {
    console.log("Amount is:" + amount + "KSH");
  }
}

// calling the fuction

convertCurrency(2000, "USA");
convertCurrency(2000, "Uganda");
convertCurrency(2000, "japan");
convertCurrency(543, "japan");

// global scope vs block scope

// write a fuction that takes a number as an argument and checks the number is even or odd

function checkIfEvenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("The number is" + number + "is even");
  } else {
    console.log("The number is " + number + "is odd");
  }
}
checkIfEvenOrOdd(90);
checkIfEvenOrOdd(901);
checkIfEvenOrOdd(875);
checkIfEvenOrOdd(876);

// write a fuction that takes in an array of names,loops through the names changing them to all uppercase

function ChangeNamesToUppercase(names) {
  // ["albert","nobert"]
  let finalArray = [];
  for (let index = 0; index < names.length; index = index + 1) {
    finalArray.push(names[index].toUpperCase());
  }
  console.log(finalArray);
}
ChangeNamesToUppercase(["albert", "nobert"]);
ChangeNamesToUppercase(["jane", "isaiah", "aron", "george"]);

// strings and numbers  and arrays
// almost everything in javascript is an object

// Reverse string: Write a function that takes a string as an argument and returns the string reversed.
const email = "isaiahrotich51@gmail.com";
function reverseString(sentence) {
  const arrayOfCharacters = sentence.split("");
  console.log(arrayOfCharacters);
  const reversedArrayOfChars = arrayOfCharacters.reverse();
  console.log(reversedArrayOfChars);
  return reversedArrayOfChars.join("");
  // return sentence.split("").reverse().join("") (simplest way)
}
console.log(reverseString(email));
console.log(reverseString("Hellow World"));
console.log(reverseString("Albert"));

// You can use string methods such as split(), reverse(), and join() to accomplish this task.
/* const name = ["victor", "fiona"];
console.log(name.reverse()); */

//  Given an array of numbers, write a function that calculates the average of the numbers.

function getAverage(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers;
  }
  return sum / numbers.length;
}
let numbers = ["30", "20", "10"];
console.log(getAverage(numbers));

// Given an array of numbers, write a function that finds the maximum number in the array.

// function getMaximumNumber(numbers) {
//   if (numbers.length === 0) return 0;
//   let getMaximumNumber = 0;

// Given an array of numbers, write a function that finds the maximum number in the array.
const scores = [32, 4, 55, 2, 87];
console.log(...scores); // the spread operator

console.log(Math.max(...scores));

// console.log(Math.max(32, 45, 12));
