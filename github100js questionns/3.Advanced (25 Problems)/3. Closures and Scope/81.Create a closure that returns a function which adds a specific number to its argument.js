function createAdder(x){
    return function(y){
        return x + y;

    };
}

let addFive = createAdder(5);
console.log(addFive(10));