let promise1 = Promise.resolve('First');
let promise2 = Promise.resolve('Second');
let promise3 = Promise.resolve('Third');

Promise.all([promise1, promise2, Promise3]).then(results => console.log(results));