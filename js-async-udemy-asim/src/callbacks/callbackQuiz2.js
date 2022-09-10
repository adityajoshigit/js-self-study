// The below code swallows the error and doesn't pass it up the chain, 
// make it pass the error up the stack using the next callback.

const fs = require("fs");

function readFileThenDo(next) {
    fs.readFile("./blah.nofile", (err, data) => {
        next(err, data);
    });
}

readFileThenDo((err, data) => {
    if (err) console.error(err);
    else console.log(data);
});