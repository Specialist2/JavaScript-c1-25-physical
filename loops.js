// A loop is used to execute a block of code{} repeatedly for a number of times

// while loop,for loop
let startingPoint = 40;

while (startingPoint < 49) {
  console.log(" loop number " + startingPoint);
  startingPoint = startingPoint + 3; // increase starting point by three every loop
}

let studentsMarks = [23, 56, 82, 90, 12, 0, -2, 120, 34, 55, 62];
console.log(studentsMarks[1]);

let index = 0;

while (index < studentsMarks.length) {
  // grading
  let currentMark = studentsMarks[index];
  if (currentMark < 0 || currentMark > 100 || typeof currentMark !== "number") {
    console.log("Error:- Invalid marks!!");
  } else if (currentMark >= 80) {
    console.log("Mark" + currentMark + "is Grade:A");
  } else if (currentMark >= 65) {
    console.log("Mark" + currentMark + "is Grade:B");
  } else if (currentMark >= 50) {
    console.log("Mark" + currentMark + "is Grade:C");
  } else if (currentMark >= 40) {
    console.log("Mark" + currentMark + "is Grade:D");
  } else {
    console.log("Mark" + currentMark + "is Grade:E");
  }
  // increment index
  index = index + 1;
}
// Rewrite this using a for loop
