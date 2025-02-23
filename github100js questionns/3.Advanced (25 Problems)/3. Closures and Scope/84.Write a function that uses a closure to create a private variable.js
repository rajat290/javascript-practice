// Write a function that uses a closure to create a private variable.


function createSecret(){
    let secret = 'I am a Secret';
    return function(){
       return secret;
    };
}

let getSecret = createSecret();
console.log(getSecret()); // I am a Secret