// Find the majority element in an array
// A majority element in an array is an element that appears more than n/2 times, where n is the size of the array.
// Given an array nums, return the majority element.
// If there is no majority element, return -1.  


// Tumhe ek array diya gaya hai. Tumhe usme se majority element dhoondhna hai.

// Majority element: Jo element array me n/2 se zyada baar aya ho. Agar koi aisa element hai, to usse return karo. Agar nahi, to return "No Majority Element".

// Input: [2, 2, 1, 1, 2, 2, 2]
// Output: 2 → kyunki 2, 7 elements me se 4 baar aya (7/2 = 3.5 se zyada)

// 🔹 2. Real World Example:
// Soch le ek voting system chal raha hai. Har number ek candidate ka code hai. Tumhe check karna hai kya koi candidate aisa hai jise aadhe se zyada votes mile ho? Agar haan, uska number batao.

function findMajorityElement(nums) {
    // Initialize the count and candidate
    let count = 0;
    let candidate = null;
    // First pass: Find a candidate
    for (let num of arr) {
        if (count === 0) {
            candidate = num; // Set the current number as candidate
            count = 1; // Reset count
            } else if (candidate === num) {
            count++; // Increment count if the same candidate is found
            } else {
            count--; // Decrement count if a different candidate is found
            }
        }
}



/*🔹 4. Step-by-Step Breakdown:
Candidate choose karna (first loop):

Agar count 0 hai, to current element ko candidate banate hain.

Agar current element candidate ke equal hai, to count++

Nahi to count--

Second loop:

Candidate ko validate karte hain — kitni baar aya hai.

Agar wo > n/2 hai, to wahi majority element hai.

✅ Time Complexity: O(n)
✅ Space Complexity: O(1)
✅ Ye logic dikhata hai ki tum optimized solution tak soch sakte ho, brute force nahi lagate!*/ 