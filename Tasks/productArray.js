// Given an array of numbers, return an array where each element is the product
//  of all the elements in the original array except the current element.

function getWeight(arr) {
  const finalArr = [];
  for (let index = 0; index < arr.length; index++) {
    console.log("Current number: " + arr[index]);

    // multiple all the other elements except current number
    // put that results in the final Array
    let productOfOtherElements = 1;
    for (
      let innerLoopIndex = 0;
      innerLoopIndex < arr.length;
      innerLoopIndex++
    ) {
      if (index !== innerLoopIndex) {
        productOfOtherElements = productOfOtherElements * arr[innerLoopIndex];
      }
    }
    finalArr.push(productOfOtherElements);
  }
  return finalArr;
}
const results = getWeight([1, 2, 3, 4, 5]);

console.log(result); // [120,60,40,30,24]

const resultTwo = getWeight([122, 32, 767, 23, 444, 34, 90, 434, 243, 545, 23]);
console.log(resultTwo);
