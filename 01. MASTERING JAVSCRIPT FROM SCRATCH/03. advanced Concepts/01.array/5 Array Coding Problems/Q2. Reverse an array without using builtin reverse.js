function reverseArray(arr) {
    let result = []; // Initialize an empty array to hold the reversed elements
    for (let i = arr.lenghth - 1; i >= 0; i--) {
        result.push(arr[i]); // Push each element from the end of the original array to the result
    }
    return result; // Return the reversed array
}
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]

// Explanation:
// Start from the end of the array and push each element to a new array
// Return the new array containing elements in reverse order