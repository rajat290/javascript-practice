function removeDuplicates(arr) {
    let unique = []; // Initialize an empty array to hold unique elements
    for  (let i of arr) {
        if (!unique.includes(i)) { // Check if the element is not already in unique
            unique.push(i); // If not, add it to unique
        }else {
            continue; // If it is, continue to the next element
        }
    }
    return unique; // Return the array of unique elements
}
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 6];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5, 6]
// Explanation:
// Initialize an empty array to hold unique elements
// Loop through the original array
// If the element is not already in the unique array, add it
// Return the unique array containing only distinct elements        
// Flowchart Logic:
// Start → Initialize unique array → Loop through original array → If element not in unique → Add to unique → Return unique → End   
