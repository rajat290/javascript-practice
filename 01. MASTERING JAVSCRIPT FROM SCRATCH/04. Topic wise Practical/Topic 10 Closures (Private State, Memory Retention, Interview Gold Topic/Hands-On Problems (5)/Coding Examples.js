function createCounter () {
    let count = 0; // private variable 
    return function () {
        count++;
        return count;
    }
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3 

const counter2 = createCounter();
console.log(counter2()); // 1 (separate private state)

//count is private. Outside code cannot access or reset it directly.