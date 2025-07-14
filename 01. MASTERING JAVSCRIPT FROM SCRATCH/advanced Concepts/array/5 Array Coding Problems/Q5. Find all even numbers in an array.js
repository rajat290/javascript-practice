function findEvenNumers(arr) {
    let evenNumbers = []; // Initialize an empty array to hold even numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // Check if the number is even
            evenNumbers.push(arr[i]); // If it is, add it to the evenNumbers array
        }
    }
    return evenNumbers; // Return the array of even numbers 

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumers(numbers)); // Output: [2, 4, 6, 8, 10]
// Explanation:
// Initialize an empty array to hold even numbers
// Loop through each element in the array
// Check if the element is even
// If it is, add it to the evenNumbers array
// Return the evenNumbers array containing all even numbers
// Flowchart Logic:
// Start → Initialize evenNumbers array → Loop through original array → If element is even → Add to evenNumbers → Return evenNumbers → End
// Flowchart Logic:
// Start → Initialize evenNumbers array → Loop through original array → If element is even → Add to evenNumbers → Return evenNumbers → End
 
//using filter method
function findEvenNumbers(arr) {
    return arr.filter(num => num%2 === 0); // Use filter to return only even numbers        
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbersArray)); // Output: [2, 4, 6, 8, 10]
// Explanation:
// Use filter to return only even numbers        
// Flowchart Logic:
// Start → Use filter to return even numbers → Return filtered array → End
// Flowchart Logic:
// Start → Use filter to return even numbers → Return filtered array → End  