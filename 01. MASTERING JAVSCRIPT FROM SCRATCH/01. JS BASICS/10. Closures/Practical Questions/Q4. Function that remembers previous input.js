function rememberPreviousInput() {
    let previousInput = null;
    return function(input) {
       const output = previousInput !== null ? `Previous input was: ${previousInput}` : "No previous input";
       previousInput = input;
       return `${output}, Current input is: ${input}`;
    }
}
// Example usage:
const rememberInput = rememberPreviousInput();
console.log(rememberInput("Hello")); // Output: No previous input, Current input is: Hello
console.log(rememberInput("World"));    // Output: Previous input was: Hello, Current input is: World           
// Explanation:     
// previousInput is stored in closure
// Function returns previous input if available
// Updates previousInput with current input
// Each call remembers the last input