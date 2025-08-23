// Q1: Create a function that takes a name and a callback to print a greeting
function createGreeting(name, callback) {
    // Call the callback function with the name
    callback(name);
}   

// Example usage
createGreeting("Rajat", function(name) {
    console.log("Hello, " + name + "!");
});
// Explanation:
// The createGreeting function takes a name and a callback function as parameters.
// It calls the callback with the provided name to print a greeting.
// This demonstrates how callbacks can be used to execute code after an action is performed.        