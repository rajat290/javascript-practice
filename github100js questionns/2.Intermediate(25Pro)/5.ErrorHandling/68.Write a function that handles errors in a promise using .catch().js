function asycOperation(){
    return new Promise ((resolve, reject) =>{
        reject('failed');
    });
}

asycOperation().catch(error => console.log(error));