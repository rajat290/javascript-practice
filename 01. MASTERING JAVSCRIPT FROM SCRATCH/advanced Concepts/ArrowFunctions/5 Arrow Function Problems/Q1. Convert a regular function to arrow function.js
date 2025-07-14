// Convert this:
function add(a, b) {
  return a + b;
}

// To an arrow function:
const add = (a, b) => a + b;
console.log(add(5,3)); // Output: 8

// Explanation: 
// The regular function 'add' is converted to an arrow function.
// Arrow functions allow for a more concise syntax, especially for simple operations like addition.
// The 'return' keyword is implicit when the function body is a single expression.
// Flowchart Logic:
// Start → Define arrow function add with parameters a and b → Return a + b → End
// Flowchart Logic:
// Start → Define arrow function add with parameters a and b → Return a + b → End