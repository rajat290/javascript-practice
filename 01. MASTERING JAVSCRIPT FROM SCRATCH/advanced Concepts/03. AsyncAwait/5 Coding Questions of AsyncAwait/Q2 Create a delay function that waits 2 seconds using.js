// Make a function wait 2 seconds before logging "Done"
function delay() {
    return new promise((resolve) => {
        setTimeout(() => {
            console.log("Done");
            resolve();
        }, 2000);
    }
    );

}