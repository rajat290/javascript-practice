// "Subarray with given sum"**

// Tumhe ek array diya gaya hai aur ek target sum diya gaya hai. Tumhe check karna hai ki kya koi aisa continuous subarray exist karta hai jiska sum target ke barabar ho?

// Agar haan, to true return karo, warna false.

// Condition: Subarray ka matlab hai array ke consecutive elements (e.g., [2,3,4] from [1,2,3,4,5]).

// Input:
// Array: [1, 4, 20, 3, 10, 5]
// Target: 33
// Output: true → because 20 + 3 + 10 = 33


// 🔹 2. Real World Example:
// Soch le tumhare paas ek financial app hai jahan tumhare paas daily expenses ka array hai. Manager bolta hai ki check karo kya kisi consecutive dino ka expense mila ke 33 hua tha — agar haan, to batao.


function hasSubarraywithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Add current element to the sum

        // Shrink the window from the start if currentSum exceeds target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if we found a subarray with the exact sum
        if (currentSum === target) {
            return true; // Found a subarray with the given sum
        }
    }
    return false; // No subarray found
}
console.log(hasSubarraywithSum([1, 4, 20, 3, 10, 5], 33)); // Output: true



// 🔹 4. Step-by-Step Breakdown:
// Start aur end pointers banaye, jisse hum ek sliding window approach use kar rahe.

// currentSum me har baar end index ka element add karte jao.

// Agar currentSum > target, to start se subtract karte jao jab tak ya to:

// currentSum <= target ho jaye

// ya start > end ho jaye

// Agar kabhi currentSum == target mila → true return kar do.

// Agar pura array traverse kar liya aur nahi mila → false.

// ✅ Recap for Interviews:

// This is a classic sliding window question.

// Interviewer check karega: kya tum brute force (O(n²)) approach se optimized (O(n)) tak ja sakte ho?

// Real life examples like expense tracking ya temperature pattern spotting me kaam aata hai.

