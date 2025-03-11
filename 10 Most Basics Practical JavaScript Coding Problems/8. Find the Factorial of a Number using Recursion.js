/*Problem Statement:

Write a function factorial(n) that returns the factorial of n.
Flowchart Logic:

Start → Input Number → Recursion → Output.
*/

function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));  
  // Output: 120
  