//  Given an array of numbers, write a function that filters out the even numbers
// and returns a new array containing only the odd numbers //filter

function getOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

console.log(getOddNumbers([1, 2, 3, 4, 5]));
console.log(getOddNumbers([2, 4, 6, 8, 10]));
console.log(getOddNumbers([1, 3, 5, 7, 9]));
