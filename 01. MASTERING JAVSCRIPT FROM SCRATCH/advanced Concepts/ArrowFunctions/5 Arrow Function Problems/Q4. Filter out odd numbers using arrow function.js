// Q4. Filter out odd numbers using arrow function

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use filter method with arrow function to filter out odd numbers
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// Explanation:
// Use filter method to return only even numbers
// Flowchart Logic:
// Start → Define numbersArray → Call filter method with arrow function → Check if num is even → If true, include in evenNumbers array → End