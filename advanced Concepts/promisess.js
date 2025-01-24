// The promise object represent the eventual complition or failure of an asynchronous operation and its resulting value 

//  1. prnding 
//  2. fullfill 
//  3. Rejected 


// fetch('http://something.com').then().catch().finally()


const promiseOne = new Promise(function (resolve, reject) {
    //do an async call 
    // Db Calls , cryptography , network 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})


promiseOne.then(function () {
    console.log('Promise is resolved ');
})


const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is complete');
        resolve()
    }, 1000);

}).then(function () {
    console.log('Promise 2 is resolved ');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is 3 is completed');
        resolve()
    }, 1000);

}).then(function () {
    console.log('promise 3 is completed');
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "Rajat@email.com" })
    }, 1000);
})

promiseFour.then(function (user) {
    console.log(user.username);
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Rajat", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})

promiseFive.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))

promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseSix() {
    try {
        const response = await promiseSix
        console.log(response);

    } catch (error) {
        console.log(error);

    }
}
consumePromiseSix()

/// using fetch method 
// async function getAllUsers() {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//          const data = await response.json ()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }

// getAllUsers()


// now using 


fetch('https://api.github.com/users/rajat290')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        
            console.log(data);
        })

    .catch ((error) => console.log(error))