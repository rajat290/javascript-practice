const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
   }
   return color;console.log("Checking code for errors...");

try {
    startChangingColor();
    stopChangingColor();
} catch (error) {
    console.error("Error:", error.message);
}

// Check for potential issues
if (!document.querySelector('#Start')) {
    console.error("Element with id 'Start' not found.");
}
if (!document.querySelector("#stop")) {
    console.error("Element with id 'stop' not found.");
}
};
let intervalId; 
const startChangingColor = function(){
    intervalId = setInterval (changeBgColor, 1000);

    function changeBgColor(){
        document.body.style.background = randomColor();

    }
}
const stopChangingColor = function (){
    clearInterval(intervalId);
}

document.querySelector('#Start').addEventListener
("click", startChangingColor);

document.querySelector("#stop").addEventListener
("click", stopChangingColor);