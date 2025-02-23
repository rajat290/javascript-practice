// Write a function that demonstrates lexical scoping.
// // 

function outerHeight() {
    let outerVar = 'I am outer';
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();