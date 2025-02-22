// Write a program that uses try and catch to handle errors in a function.

function riskyFunction (){
    try {
        throw new Error('Something went wrong!');
        } catch (error) {
            console.log('Caught an error:', error.message);

    }
}


function errorHandlig(){
    try{
    {'control the error'}
    } catch (error){
        console.log('Caught an error:', error.message);
    }
}