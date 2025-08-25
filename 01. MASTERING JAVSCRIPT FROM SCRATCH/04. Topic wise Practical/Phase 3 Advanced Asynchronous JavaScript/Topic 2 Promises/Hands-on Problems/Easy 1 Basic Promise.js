const task = new Promise((resolve , reject ) => {
    setTimeout(() => {
        resolve("Task completed");
    }, 2000);
})

task.then((message) => {
    console.log(message);
});