// Create a promise version of the async readFile function

const fs = require("fs");

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

readFile("../callbacks/callbackQuiz1.js", "utf-8")
    .then(
        res => console.log("File\'s data is ===>\n\n" + res),
        error => console.log("Encountered some error ===> \n\n " + error)
    );