
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let names1 = [];
  let names2 = [];
  let combined = [];
  let containsa = false;
  
    for (let i = 0; i < array.length; i ++){
      for (let j = 0; j < array[i].length ; j++){
        
      if (array[i].charAt(j) == 'a') {
        containsa = true;  
      }}
      if (containsa == true) {
        names1.push(array[i]);
        containsa = false;
      } else {
        names2.push(array[i]);
      }
    
    }    console.log(names1);
        console.log(names2);
      console.log()
      combined[0] = names1;
      combined[1] = names2;
        console.log(combined)
    return(combined);
  }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
