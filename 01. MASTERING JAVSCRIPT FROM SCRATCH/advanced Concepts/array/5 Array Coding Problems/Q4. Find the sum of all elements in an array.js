function sumArray(arr) {
    let sum = 0; // Initialize sum to 0
    for (let num of arr) {
        sum += num // Add each element to sum    
        }
    return sum;
    }
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15   
// Explanation:
// Initialize sum to 0
// Loop through each element in the array
// Add each element to sum
// Return the final sum 
// Flowchart Logic:
// Start → Initialize sum = 0 → Loop through array → Add each element to sum → Return sum → End