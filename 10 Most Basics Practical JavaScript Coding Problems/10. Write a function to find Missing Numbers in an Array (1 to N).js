/*Problem Statement:

Write a function findMissingNumbers(arr) that finds missing numbers.
Flowchart Logic:

Start → Input Array → Find Missing → Output.*/

function findMissingNumbers(arr, n) {
    let missing = [];
    
    for(let i = 1; i <= n; i++) {
      if(!arr.includes(i)) {
        missing.push(i);
      }
    }
    
    return missing;
  }
  
  console.log(findMissingNumbers([1, 2, 4, 6], 6));
  // Output: [3, 5]
  