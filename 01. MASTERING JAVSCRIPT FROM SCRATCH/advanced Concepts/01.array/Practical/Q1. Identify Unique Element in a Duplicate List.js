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
// 1. Question (Hinglish + Easy Language):
// 💬 Tumhare paas ek array hai jisme kuch numbers hain. Tumhe ek naya array banana hai jisme sirf even (2 se divide hone wale) numbers hi ho.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6

//  2. Real World Example:
// Socho tumhare paas ek list hai students ke roll numbers ki, aur tumhe sirf un students ki list chahiye jinke roll numbers even hain (jaise even roll number wale students ko hi kuch prize milna hai).


const numbers = [1, 2, 3, 2, 1, 4, 3]; // Example input
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 2, 4]


//  4. Step-by-Step Explanation:
// filter() ek array method hai jo har element ko check karta hai.

// Humne condition di: num % 2 === 0, iska matlab hai sirf wahi number chune jo even ho.

// Har number pe yeh check lagta hai aur agar condition true hoti hai to vo number naya array me chala jata hai.

// Final array me sirf even numbers bachte hain.


//  Summary: Tumne ek array me se kuch specific value (even numbers) ko alag nikalna seekha using filter()