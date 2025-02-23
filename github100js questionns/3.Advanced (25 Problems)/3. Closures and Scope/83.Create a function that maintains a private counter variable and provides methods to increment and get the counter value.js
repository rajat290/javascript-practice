// Create a function that maintains a private counter variable and provides methods to increment and get the counter value.

function createCounter() {
    let count = 0;
    return {
        increment : () => count ++,
        getValue: () => count
    };
}

let counter = createCounter();
counter.increment()
console.log(counter.getValue()); // Output: 1