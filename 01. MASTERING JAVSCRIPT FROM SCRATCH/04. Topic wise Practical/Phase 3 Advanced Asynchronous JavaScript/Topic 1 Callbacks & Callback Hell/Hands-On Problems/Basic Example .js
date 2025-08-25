function orderFood(callback){
    console.log ("Food ordered");
    setTimeout(() => {
        console.log("Food is being prepared");
        callback();
        callback();
    }, 2000);
}

function serveFood(){
    console.log("Food served");
}

orderFood(serveFood);