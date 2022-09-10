const fs = require("fs");

fs.readFile("./files/demofile.txt", { encoding: "utf8" }, (err, data) => {
    if (err) {
        // next(err) <- can pass up the chain

        // console.error(err); <- can log and continue
        // return
        throw err; // <- can error and exit
    } else {
        console.log(data);
    }
});