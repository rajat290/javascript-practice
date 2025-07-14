// Write two async functions and call them in sequence, making sure the second waits for the first
async function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First function completed");
            resolve();
        }, 1000);
    });
}

async function secondFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second function completed");
            resolve();
        }
            , 1000);
    });
}

async function callFunctionsInSequence() {
    await firstFunction();
    await secondFunction();
    }   

     
callFunctionsInSequence().then(() => {
    console.log("All functions completed");
});