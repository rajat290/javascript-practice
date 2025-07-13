function once(fn) {
    let called = false;
    let result;
    return function(...args){
        if (!called) {
            result = fn.apply(this, args);
            called = true;
        
        }
        return result;

    }
}
// Example usage:
const runOnce = once(() => console.log("This runs only once!"));
runOnce(); // Output: This runs only once!
runOnce(); // No output, function does not run again


// Explanation:
// called is stored in a closure

// Function will only execute if called is false

// After first call, it won’t run again