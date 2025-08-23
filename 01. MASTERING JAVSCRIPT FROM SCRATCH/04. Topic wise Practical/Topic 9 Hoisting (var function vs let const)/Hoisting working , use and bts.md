Hoisting matters in variable initialization order, function calls before declaration and debugging errors 

Behind the Scenes

Hoisting = Js default behavior of moving declaration to the top of the scope before execution 

var and function declaration are hoisted fully 

let and const are hoisted too but thet stay in the tempiral dead zone untill their line of execution 

that's why accesing them before declaration thows Reference Error 


Execution Context Creation (2 phases):

Memory Creation Phase (Hoisting happens here):

var → allocated memory & initialized with undefined

let / const → memory allocated but uninitialized (TDZ)

function → stored entirely (so callable before its declaration)

Execution Phase → code runs line by line