//  ⚡ Imagine you’re debugging legacy code where variables are declared at the bottom:


function calculate (){
    total = price * quantity;
    console.log(total);
    var price = 10;
    var quantity = 2;
}
calculate();

//What will happen?

// var price and var quantity are hoisted as undefined.

// So total = undefined * undefined → NaN.

// Correct fix: Declare variables at the top with let/const.


function calculate (){
const price = 10;
    const quantity = 2;

    total = price * quantity;
    console.log(total);
    
}
calculate();
