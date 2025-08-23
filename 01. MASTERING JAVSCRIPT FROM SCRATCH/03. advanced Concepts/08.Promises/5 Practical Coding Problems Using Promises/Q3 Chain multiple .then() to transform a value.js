// Q3: Chain multiple .then() to transform a value

// Step-by-step double a number: 2 -> 4 -> 8 -> 16

function doubleNumber(num) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 2);
        }
            , 1000);
    });
}
// Step 1: Double the number 2
doubleNumber(2)
.then((result) => {
    // Step 2: Double the result from step 1
    return doubleNumber(result);
    })  
    .then((result) => { 
        // Step 3: Double the result from step 2
        return doubleNumber(result);
    })
    .then((result) => {
        // Step 4: Double the result from step 3
        return doubleNumber(result);
    })
    .then((finalResult) => {
        console.log(finalResult); // Output: 16 after 4 seconds
    })
    .catch((error) => {
        console.error("Error:", error);
    });
// Explanation:
// 1. Start with the number 2
// 2. Double the number 2 to get 4
// 3. Double the number 4 to get 8
// 4. Double the number 8 to get 16

// Flowchart Logic:
// Start → Double number 2 → Double number 4 → Double number 8 → Double number 16 → End