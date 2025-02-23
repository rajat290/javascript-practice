// Implement a function that uses closures to create a memoized function.

function memoize(fn){
let cache = {};
return function (x){
    if (cache[x]){
        return cache[x];
    }
    let result = fn[x];
    cache[x] = result;
    return result;
};
}

function square (n){
    return n*n;
}
let memoizedSquare = memoize(square);
console.log(memoizedSquare(5)); // prints 25