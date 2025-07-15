// Output: "Task done" after 2 seconds

function createDelayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done");
        }, 2000);
    });
}
// Example usage:
const promise = createDelayedPromise();
promise.then((result) => {
    console.log(result);
});
