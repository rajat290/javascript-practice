// Q: Multiply a number by 2, then add 10, then subtract 3 using Promises.

const calculate = new Promise((resolve ) => resolve(5));

calculate
.then (num => num*2)
.then (num => num + 10)
.then (num => num - 3)
.then (result => console.log(result));