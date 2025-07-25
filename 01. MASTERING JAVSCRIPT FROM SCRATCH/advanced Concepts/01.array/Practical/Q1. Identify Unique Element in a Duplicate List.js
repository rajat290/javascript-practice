// ✅ Q1. Identify Unique Element in a Duplicate List
// ❓"Given an array where every element appears twice except one, identify the unique element."

// // 🧠 Twist: Sounds simple, but interviewers watch if you go brute-force or optimal.

// function findUniqueElement(arr) {
//   // Using a Set to track unique elements
//   const uniqueElements = new Set();

//   for (const num of arr) {
//     if (uniqueElements.has(num)) {
//       uniqueElements.delete(num); // If already exists, remove it
//     } else {
//       uniqueElements.add(num); // If not, add it
//     }
//   }

//   // The only remaining element in the set is the unique one
//   return [...uniqueElements][0];
// }

const numbers = [1, 2, 3, 2, 1, 4, 3]; // Example input
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 2, 4]