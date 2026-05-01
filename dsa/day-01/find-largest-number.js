let arr = [7, 0, 12, -9, 3, -2, 25, 4];
let arr2 = [-10, -3, -50];

/**
 * Find Largest number in an array
 */
function findLargestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const result = findLargestNumber(arr);
const result2 = findLargestNumber(arr2);
console.log(result, result2);
