


const readFileFake = (sleepTime) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => resolve("done"),
                sleepTime
            );
        }
    )
};

const timeout = (sleepTime) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => resolve("done"),
                sleepTime
            );
        }
    )
};

const p = Promise.race(
    [
        readFileFake(4000),
        timeout(5000)
    ]
);
p.then(result => console.log(result));