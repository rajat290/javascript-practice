// Tumhe ek array diya gaya hai numbers ka, aur tumhe "second largest number" find karna hai.
// Input: [1, 3, 4, 2, 5]
// Output: 4


// 1. Question (Hinglish + Easy Language):
// Tumhare paas ek array hai numbers ka. Tumhe usme se second largest number dhoondna hai.
// Example:
// Input: [1, 3, 4, 2, 5]   
// Output: 4
// Twist (Interview Style):
// "Write a function that takes an array and returns the second largest number. Don’t use any sorting methods." 
// 2. Real World Example:
// Socho tumhare paas ek list hai students ke marks ki, aur tumhe second highest
// marks wale student ka naam ya roll number chahiye. Toh tumhe second largest number dhoondna padega.  
// 3. Solution (Code):
function secondLargest(arr) {
  let first = -Infinity; // Initialize first largest
  let second = -Infinity; // Initialize second largest

  for (let num of arr) {
    if (num > first) {
      second = first; // Update second largest
      first = num; // Update first largest
    } else if (num > second && num < first) {
      second = num; // Update second largest if it's less than first but greater than current second
    }
  }

  return second === -Infinity ? null : second; // If no second largest found, return null
}

console.log(secondLargest([1, 3, 4, 2, 5])); // Output: 4

// 4. Step-by-Step Explanation:

// Pehle max aur secondMax dono ko -Infinity se initialize kiya.

// Har number ke liye check kiya:

// Agar number max se bada hai, to secondMax = max kar do, aur max = num.

// Agar number secondMax se bada hai aur max ke barabar nahi hai, to secondMax = num.

// Loop khatam hone ke baad secondMax me answer mil gaya.


// ✅ Recap for Interviews:

// Ye question logic + edge case dono check karta hai.

// Sorting avoid karni thi, isiliye humne manual max-check kiya.

// Interviewer agar push kare to O(n) solution justify karna — ye linear time me solve ho gaya.