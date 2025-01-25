const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        name: 'apple',
        price: 1.00,
        quantity: 5
    },
    {
        name: 'banana',
        price: 0.50,
        quantity: 10
    },
    {
        name: 'orange',
        price: 1.50,
        quantity: 7,
    }
]

const priceToPay = shoppingCart.reduce( (acc, name) => acc + name.price , 0)

console.log(priceToPay);