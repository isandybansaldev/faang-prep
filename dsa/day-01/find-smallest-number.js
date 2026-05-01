let arr = [1, 6, 2, 5, 8, 12, 9];
let arr2 = [4, 7, -1, 2, 9, 13];

/**
 * Find Largest number in an array
 */
function findSmallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const result = findSmallestNumber(arr);
const result2 = findSmallestNumber(arr2);

console.log(result, result2);
