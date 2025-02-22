// Implement a function that uses setTimeout to execute a callback after a delay.
function delayedExecution(callback, delay){
    setTimeout(callback, delay);

}

delayedExecution(() => console.log('Executed after delay'), 5000);