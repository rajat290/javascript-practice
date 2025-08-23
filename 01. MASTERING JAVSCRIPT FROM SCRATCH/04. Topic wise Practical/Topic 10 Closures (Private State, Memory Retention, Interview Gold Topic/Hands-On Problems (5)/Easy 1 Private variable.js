function secret() {
    let password = "12345";
    return function (){
        return password;
    }
}

const getPassword = secret();
console.log(getPassword()); // "12345"


//Step 1: Defining the secret function
// function secret() {
    /*
This defines a new function named 
secret
. The function takes no arguments.
    */

/*Step 2: Declaring a local variable password inside 
secret

let password = "12345";
Inside the 
secret
 function, a local variable password is declared and assigned the value "12345". This variable is only accessible within the scope of the 
secret
 function.

//Step 3: Returning a new function from 
secret
/*return function (){
  return password;
}
*/ 

/* The 
secret
 function returns a new function. This new function takes no arguments and returns the value of the password variable.

Note: This is where things get interesting. The returned function has access to the password variable, even though it's defined inside the 
secret
 function. This is an example of a closure, where a function "remembers" the variables of its surrounding scope.*/



 // Assigning the returned function to getPassword

//  const getPassword = secret();

// The 
// secret
//  function is called, and the returned function is assigned to a new constant variable getPassword.

// Step 5: Calling getPassword and logging the result

console.log(getPassword()); // "12345"