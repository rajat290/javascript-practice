// function asyncFunction(){
//     return new promise((resolve, reject) =>{
//         reject ('failed');
//     });
// }

// asyncFunction()
// .catch(error => console.log('Error:', error));

function asyncFunction() {
    return new Promise((resolve, reject) => {
        reject('Failed');
    });
}

asyncFunction()
    .catch(error => console.log('Error:', error));