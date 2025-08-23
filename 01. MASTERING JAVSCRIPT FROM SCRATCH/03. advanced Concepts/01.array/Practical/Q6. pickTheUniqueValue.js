// Tumhare paas numbers ka ek array hai. Tumhe sirf unique elements chahiye — duplicate hata ke.

// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]


// Twist (Interview Style):
// "Write a function that takes an array and returns a new array with only distinct values. Don’t use any external libraries like lodash."


// 🔹 2. Real World Example:
// Soch le tum ek voting system bana rahe ho. Ek person galti se ya intentionally multiple votes dal raha hai. Tumhe unique voter IDs hi count karni hai, toh duplicates hata ke list banana zaroori hai.

const input = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(input)];

console.log(unique); // [1, 2, 3, 4, 5]

// 🔹 4. Step-by-Step Breakdown:
// Set method se (Easy way):

// JavaScript ka Set sirf unique values store karta hai.

// new Set(input) duplicates hata deta hai.

// [...new Set()] se hum usko normal array me convert kar dete hain.
// 🎯 Interviewer agar thoda strict hai toh bol sakta hai: “Don’t use Set, write logic manually.” Tab ye use karo

function getUnique(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(getUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Manual loop se (Core logic):

// Ek khaali array result banate hain.

// Loop chalate hain original array pe.

// Har value check karte hain ki result me already hai ya nahi.

// Agar nahi hai toh result me push karte hain.

// End me unique values return ho jaati hain.



// Recap for Interviews:

// Set fastest way hai unique values ke liye.

// Loop + includes approach manual logic ke liye best hai jab Set allowed nahi hota.

