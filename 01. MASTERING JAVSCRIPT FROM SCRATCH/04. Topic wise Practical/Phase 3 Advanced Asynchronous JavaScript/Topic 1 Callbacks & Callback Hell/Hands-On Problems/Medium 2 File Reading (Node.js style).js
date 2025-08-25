// Medium 2: File Reading (Node.js style)

const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading File:", err);
        return ;
    }
    console.log("file content", data);
})