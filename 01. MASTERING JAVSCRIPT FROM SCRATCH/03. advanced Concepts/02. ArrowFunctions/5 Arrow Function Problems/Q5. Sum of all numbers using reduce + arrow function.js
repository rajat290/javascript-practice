// Q5. Sum of all numbers using reduce + arrow function

const numbers = [1, 2, 3, 4, 5];
// Use reduce method with arrow function to calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Explanation:
// Use reduce method to accumulate the sum of all numbers
// Flowchart Logic:
// Start → Define numbers array → Call reduce method with arrow function → Add currentValue to accumulator → Return final sum → End 
