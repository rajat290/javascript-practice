// Question: Print numbers 1 → 2 → 3 each after 1 second (sequentially).

setTimeout(() =>  {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 1000)
    }, 1000);
}, 1000);



// function orderFood(callback) {
//     console.log("food is being prepared" );
//     setTimeout(() => {
//         console.log("Food is Ready");
//         callback();
//     }, 2000);
// }

// function eatFood() {
//     console.log( "Eatining the Food...")
// }


// orderFood(eatFood);