/**
Take 45 minutes to complete this exercise. If you need more time, you can use Focus Friday.  
 
Write a JavaScript function that takes an array of integers as input and returns true if there are any duplicate elements in the array, and false otherwise.

Input:
    1. An array of integers.
Output:
    true if there are duplicates in the input array; false otherwise.
 */

/**
Steps:
1. Create an empty object to store encountered numbers.
2. Iterate through the input array.
3. For each number, check if it already exists in the object.
4. If the number is found, there is a duplicate, so return true.
5. If the number is not found, add it to the object.
6. After iterating through the entire array, if no duplicates are found, return false.
 */

function hasDuplicates(arr) {
  let ans = false;
  let encountered = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < encountered.length; j++) {
      if (arr[i] === encountered[j]) {
        ans = true;
      }
    }
    encountered.push(arr[i]);
  }
  console.log(ans);
}

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];
console.log(hasDuplicates(numbers1)); // Output: false
console.log(hasDuplicates(numbers2)); // Output: true
