// Inside `.then()`, return another Promise that resolves after delay

function returnNestedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nested Promise Resolved");
        }, 1000);
    }); 
}
// Call `returnNestedPromise()` and chain `.then()` to handle the result    
returnNestedPromise()
.then((result) => {
    console.log(result);
});