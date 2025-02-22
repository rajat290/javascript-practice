// 78.WAF that retries a failed Promise  a specified number of times.js
// 1. Create a function called `retryPromise` that takes a promise and a number of
//    retries as arguments.

function retryPromise(promise, retries){
    return promise.catch(err =>{
        if (reties === 0 ){
            throw err;
        }
        return retryPromise(promise, retries -1);
    });
}