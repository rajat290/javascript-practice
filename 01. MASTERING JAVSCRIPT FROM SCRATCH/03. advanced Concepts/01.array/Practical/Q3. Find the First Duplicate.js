// **1. Question (Hinglish + Easy Language):
// Tumhare paas ek number array hai. Tumhe ek naya array banana hai jisme sirf even numbers (jo 2 se divide ho jaayein) ho.**

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


// 2. Real World Example:
// Socho ek sports competition me sirf even roll number waale students ko participate karne dena hai.
// Tumhare paas poori student roll number ki list hai, ab tumhe ek nayi list chahiye sirf unki jinka roll number even ho.   

// 3. Step-by-Step Explanation:
// find() ek array method hai jo ek specific value ko search karta hai.
// Is case me, hum pehle duplicate element ko dhoond rahe hain.
// Jo duplicate element hai uska index number return karta hai.
// function findFirstDuplicate(arr) {
//     const seen = new Set(); // Set to track seen elements
//     for (const num of arr) {
//         if (seen.has(num)) {
//             return num; // Return the first duplicate found
//         }
//         seen.add(num); // Add the number to the set
//     }
//     return null; // If no duplicates found, return null
// }

const numbers = [1, 2, 3, 2, 1, 4, 3]; // Example input
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 2, 4]


//  4. Step-by-Step Explanation:
// Humne filter() method use kiya — jo original array ke elements ko check karta hai.

// Har number par condition lagayi: num % 2 === 0 (even hone ki condition).

// Jo condition satisfy karte hain, unhi ko ek naye array me daal deta hai filter().

// Isse original array change nahi hota, aur humein required result milta hai.


