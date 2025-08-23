// console.log(x);
let x = 10;

// at this point Output will be : ReferenceError: Cannot access 'x' before initialization
//Because let is hoisted but in TDZ until execution reaches the line.
console.log(x);

// at this point Output will be : 10
//Because let x is already initialized with 10.