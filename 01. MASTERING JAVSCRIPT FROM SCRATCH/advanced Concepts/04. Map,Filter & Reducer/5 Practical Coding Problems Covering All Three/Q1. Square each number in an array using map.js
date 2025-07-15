// Input: [1, 2, 3]
// Output: [1, 4, 9]

const numbers = [1,2,3];
const squaredNumbers = numbers.map(num => num * num );
console.log(squaredNumbers); // Output: [1, 4, 9]
// Explanation:
// Use map() to create a new array with each number squared
// Flowchart Logic:
// Start → Use map() to iterate over numbers array → For each element, square it → Return new array → End   