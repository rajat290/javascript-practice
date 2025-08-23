 
//  A CALLBACK is a function, which passed as an argument to another function, while is then invoked inside the outer function to complete some kind of routine or action 

//  USAGE =>  callbacks are commonly used in asynchronous  programming to execute code after an asunchronous operation has completed 


 function greeting (name){
    console.log ('hello,' + name);
 }

 function getUserInput(callback){
    var name = prompt ('please enter name: ');
    callback (name); 
 }

 getUserInput(greeting);