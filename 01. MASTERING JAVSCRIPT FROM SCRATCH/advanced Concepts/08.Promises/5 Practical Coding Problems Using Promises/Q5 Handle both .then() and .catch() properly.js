// Q5: Handle both .then() and .catch() properly

// Output: Either "Success" or "Failure" with reason
function handlePromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5; // Randomly decide success or failure
        if (isSuccess) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }); 
}

handlePromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    