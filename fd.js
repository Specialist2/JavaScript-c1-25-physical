const fs = require("fs");

fs.writeFile(
  "amazing.txt",
  "We are amazing!!! \n Second  line",
  "utf-8",
  function logError(error) {
    console.log("Hello!!");
    console.log("An errow occured!!");
    console.log("here it is:" + error.message);
  }
);
