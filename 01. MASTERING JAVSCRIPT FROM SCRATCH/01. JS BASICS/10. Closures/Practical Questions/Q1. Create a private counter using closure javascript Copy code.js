function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function() {
            count++;
            return count;
        }  , 
        decrement: function() {
            count--;
            return count;
        }       
    };

    const counter = createCounter();
    console.log(counter.increment());// Output: 1       
    console.log(counter.decrement()); // Output: 0
}


// What's happening:
// count is private inside createCounter

// The returned function accesses it via closure

// Each call to counter() increments count