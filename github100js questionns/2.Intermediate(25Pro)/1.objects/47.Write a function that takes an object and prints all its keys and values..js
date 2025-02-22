// Write a function that takes an object and prints all its keys and values.
function printObject(obj){
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}