// Implement a finally block that logs a message regardless of the outcome.

function example(){
    return new promise ((resolve, reject) =>{
        resolve('Success');

    }).finally(() =>{
        console.log('Finally block executed');
    })
}

example();