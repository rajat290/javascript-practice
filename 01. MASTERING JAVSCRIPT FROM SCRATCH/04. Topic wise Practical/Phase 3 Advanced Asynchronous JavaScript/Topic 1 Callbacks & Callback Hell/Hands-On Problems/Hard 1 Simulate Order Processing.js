// Question: Create a system:

// Order placed

// Order processed (2s delay)

// Payment done (1s delay)

// Order delivered (1s delay)

function placeOrder(callback) {
    console.log(" order placed");
    setTimeout(() => {
        console.log("order proccesed");
        callback();
    }, 2000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("payment succesful")
        callback();
    }, 1000);
}

function deliverOrder() {
    setTimeout(() => {
        console.log("ordered delivered");
    }, 1000);
}

placeOrder(() => {
    makePayment(() => {
        deliverOrder();
    });
});