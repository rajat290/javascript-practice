// Question: Print “Start”, then after 2s print “Processing…”, then after 1s print “Done!”.
console.log("Start");

setTimeout(() => {
    console.log("Processing...");
    setTimeout(() => {
        console.log("Done!");
    }, 1000);
}, 2000);


