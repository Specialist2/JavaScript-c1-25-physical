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
