// Q: Make a Promise that rejects with "Error: Something went wrong" and handle it.

const errorPromise = new Promise (( resolve, reject ) =>{
    reject ("Error: Something went wrong");
})

// errorPromise.catch((error) => {
//     console.log(error);
// });

errorPromise
.then(res => console.log(res))
.catch(error => console.log(error));