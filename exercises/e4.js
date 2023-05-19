// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  var min = 10000;
  for (let i=0; i<array.length; i++) {
    if (min > array[i]) { min = array[i]}
  }
  return(min);
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  var max = 0;
  for (let i=0; i<array.length; i++) {
    if (max < array[i]) { max = array[i]}
  }
  return(max);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
