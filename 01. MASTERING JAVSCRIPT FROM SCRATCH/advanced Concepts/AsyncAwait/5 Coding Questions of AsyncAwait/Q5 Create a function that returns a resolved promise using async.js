// Write an async function that returns "Hello" and use await to get the result
async function createCounter() {
    return {
        increment: function() { 
            console.log("Counter incremented");
        },
        decrement: function() {
            console.log("Counter decremented");
        }
    };
}
async function useCounter() {
    const counter = await createCounter();
    counter.increment();
    counter.decrement();
}
useCounter().then(() => {
    console.log("Counter operations completed");
}).catch(error => {
    console.error("Error in counter operations:", error);
}); 
// Explanation:
// The createCounter function returns an object with increment and decrement methods.
// These methods can be called on the counter object created in the useCounter function.    
// The await keyword is used to wait for the createCounter function to resolve before using the counter object.
// Flowchart Logic:
// Start → Call createCounter → Await result → Call increment method → Call decrement method → End