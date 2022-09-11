// Load a file from disk using readFile and then compress it using the async zlib node library, 
// use a promise chain to process this work.

const fs = require("fs");

const loadFile = (filename, fileFormat) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, fileFormat, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const doWork = (contents) => {
    console.log("Here are the contents of the file - \n" + contents);
    return contents;
};

const closeFile = (filename) => {
    console.log("\n\nclosing file - " + filename);
};

loadFile("../callbacks/callbackQuiz1.js", "utf-8")
    .then(doWork)
    .then(closeFile);