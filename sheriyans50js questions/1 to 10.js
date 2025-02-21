const { data } = require("react-router-dom");

// 1.log you name and favrouite hobby to the console
console.log("Rajat", "i love to code");


// 2.perform and log the result of 45*2-10
console.log(45*2-10);

// 3. use console log to print the current year 

const dt = new Date();
console.log(dt.getFullYear());

// 4create two varibales for fist and last name concatenate and log them 

var a = "Rajat";
var b = "Tomar";
console.log(a + "" + b);
console.log( `${a} ${b}`   ); 
// for spacing between both names we can use backticks 


// 5. Track the value of a varibale by logging it before and after updating 
var a = 12;
console.log(a);
a= 32;
console.log(a);
// this is called the tracking 

// 6. use console.error() to simulate an error message 
console.error("Error: unable to connect to the database");
// this is used to show the error message in the console

//7. log thr square of the number 12 to the console
console.log(12*12);
// this is how we can to show the square of the any number in the console

// 8. print the type of a variable holding the value true 
var A = 29;
console.log(typeof A);
// this is how we can check the type of the any variable in the console

// 9. create a variable holding yoour age and log whether it is greater than 18
var age = 29;
console.log(age>18);
// this is how we can check the age of the any person in the console

// 10. log the result of 100/0 and observe the output 
console.log(100/0);
// this will show the error message in the console because we cannot divide any number by zero