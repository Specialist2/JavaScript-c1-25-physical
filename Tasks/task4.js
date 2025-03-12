// 4:
// Question:
// Write a function rotateArray(arr, k)
// that rotates an array arr by k positions to the right.
// For example, if arr = [1, 2, 3, 4, 5] and k = 2, the output should be [4, 5, 1, 2, 3].

function rotateArray(arr, k) {
  if (arr.length === 0 || k === 0) {
    return arr;
  }

  k = k % arr.length;

  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 5));
