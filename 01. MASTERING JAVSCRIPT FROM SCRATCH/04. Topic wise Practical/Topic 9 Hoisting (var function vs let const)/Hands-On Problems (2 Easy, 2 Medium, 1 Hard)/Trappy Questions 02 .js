sayHi ()
var sayHi = () => console.log("Hi");

// output will be:
// TypeError: sayHi is not a function (because arrow functions are stored as variables, not hoisted like function declarations).